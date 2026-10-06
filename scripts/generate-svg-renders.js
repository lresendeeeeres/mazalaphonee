const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../public/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generatePhoneSvg(colorHex, name, isPro = true) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <radialGradient id="spot" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#C8A45D" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="#E10B1F" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colorHex}"/>
      <stop offset="100%" stop-color="#111113"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="25" flood-color="#000" flood-opacity="0.85"/>
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#C8A45D" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Background Spotlight -->
  <rect width="600" height="750" fill="#050505"/>
  <ellipse cx="300" cy="360" rx="260" ry="260" fill="url(#spot)"/>

  <!-- Phone Body -->
  <g filter="url(#shadow)" transform="translate(140, 75)">
    <!-- Chassis -->
    <rect x="0" y="0" width="320" height="600" rx="54" fill="url(#bodyGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="2.5"/>
    <rect x="4" y="4" width="312" height="592" rx="50" fill="#08080A" stroke="#1F1F24" stroke-width="1.5"/>

    <!-- Screen Bezel & OLED Display -->
    <rect x="14" y="14" width="292" height="572" rx="42" fill="#030304"/>
    <rect x="16" y="16" width="288" height="568" rx="40" fill="url(#bodyGrad)" fill-opacity="0.12"/>

    <!-- Dynamic Island -->
    <rect x="108" y="28" width="104" height="28" rx="14" fill="#000" stroke="#1C1C1E" stroke-width="1"/>
    <circle cx="194" cy="42" r="5" fill="#0A1128"/>

    <!-- Camera Module Hint (Back reflection / Pro aesthetic) -->
    ${isPro ? `
      <rect x="24" y="24" width="110" height="110" rx="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="56" cy="56" r="22" fill="#141416" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="56" cy="102" r="22" fill="#141416" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="102" cy="79" r="22" fill="#141416" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="56" cy="56" r="10" fill="#0D1B2A"/>
      <circle cx="56" cy="102" r="10" fill="#0D1B2A"/>
      <circle cx="102" cy="79" r="10" fill="#0D1B2A"/>
    ` : `
      <rect x="24" y="24" width="70" height="115" rx="26" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="59" cy="56" r="20" fill="#141416" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <circle cx="59" cy="102" r="20" fill="#141416" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
    `}

    <!-- Screen Glow & Apple subtle wallpaper wave -->
    <path d="M 30 500 Q 160 300 290 420" stroke="${colorHex}" stroke-width="3" fill="none" opacity="0.4"/>
    <path d="M 30 530 Q 160 330 290 450" stroke="#C8A45D" stroke-width="1.5" fill="none" opacity="0.3"/>
  </g>

  <!-- Ground Reflection -->
  <ellipse cx="300" cy="705" rx="180" ry="12" fill="#000" opacity="0.8"/>
  <ellipse cx="300" cy="705" rx="140" ry="8" fill="#C8A45D" opacity="0.08"/>
</svg>`;
}

function generateMacSvg(colorHex, name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 600" width="100%" height="100%">
  <defs>
    <radialGradient id="spotMac" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#C8A45D" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="700" height="600" fill="#050505"/>
  <ellipse cx="350" cy="300" rx="300" ry="250" fill="url(#spotMac)"/>

  <!-- Screen Lid -->
  <g transform="translate(130, 80)">
    <rect x="0" y="0" width="440" height="280" rx="18" fill="${colorHex}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <rect x="8" y="8" width="424" height="264" rx="12" fill="#030304"/>
    <rect x="18" y="18" width="404" height="244" rx="8" fill="#0A0A0E"/>
    <!-- Screen wallpaper glow -->
    <circle cx="220" cy="140" r="80" fill="${colorHex}" opacity="0.15"/>
    <path d="M 40 220 Q 220 80 400 200" stroke="#C8A45D" stroke-width="2" fill="none" opacity="0.4"/>
    <!-- Camera Notch -->
    <rect x="200" y="8" width="40" height="12" rx="4" fill="#000"/>
    <circle cx="220" cy="14" r="2" fill="#1C3879"/>
  </g>

  <!-- Base / Keyboard -->
  <g transform="translate(70, 360)">
    <polygon points="55,0 505,0 560,40 0,40" fill="${colorHex}" stroke="rgba(255,255,255,0.2)"/>
    <rect x="100" y="6" width="360" height="18" rx="3" fill="#141416"/>
    <!-- Trackpad cutout -->
    <rect x="220" y="28" width="120" height="8" rx="2" fill="rgba(0,0,0,0.3)"/>
    <!-- Notch to open -->
    <rect x="250" y="0" width="60" height="4" rx="2" fill="#000"/>
  </g>

  <!-- Reflection -->
  <ellipse cx="350" cy="425" rx="250" ry="10" fill="#000" opacity="0.8"/>
</svg>`;
}

function generateIpadSvg(colorHex, name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 700" width="100%" height="100%">
  <defs>
    <radialGradient id="spotPad" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#C8A45D" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="650" height="700" fill="#050505"/>
  <ellipse cx="325" cy="350" rx="280" ry="280" fill="url(#spotPad)"/>

  <g transform="translate(125, 75)">
    <!-- Chassis -->
    <rect x="0" y="0" width="400" height="540" rx="36" fill="${colorHex}" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
    <rect x="8" y="8" width="384" height="524" rx="30" fill="#030304"/>
    <rect x="18" y="18" width="364" height="504" rx="22" fill="#09090D"/>
    <!-- Wallpaper artwork -->
    <circle cx="200" cy="270" r="110" fill="${colorHex}" opacity="0.2"/>
    <path d="M 40 400 Q 200 120 360 380" stroke="#C8A45D" stroke-width="3" fill="none" opacity="0.4"/>
    <!-- Front camera -->
    <circle cx="200" cy="13" r="3" fill="#1C3879"/>
  </g>

  <!-- Ground Shadow -->
  <ellipse cx="325" cy="640" rx="200" ry="12" fill="#000" opacity="0.8"/>
</svg>`;
}

const list = [
  { name: 'iphone-18-pro-silver', hex: '#E2E4E1', type: 'phone', pro: true },
  { name: 'iphone-18-pro-black', hex: '#202022', type: 'phone', pro: true },
  { name: 'iphone-18-pro-glacial', hex: '#D0DCE5', type: 'phone', pro: true },
  { name: 'iphone-18-pro-bordeaux', hex: '#5C1D24', type: 'phone', pro: true },
  { name: 'iphone-air-blue', hex: '#A8C5DA', type: 'phone', pro: false },
  { name: 'iphone-air-gold', hex: '#E8D5A3', type: 'phone', pro: false },
  { name: 'iphone-air-white', hex: '#F5F5F7', type: 'phone', pro: false },
  { name: 'iphone-air-black', hex: '#1E1E22', type: 'phone', pro: false },
  { name: 'iphone-17-blue', hex: '#8EA4B8', type: 'phone', pro: false },
  { name: 'iphone-17-lavender', hex: '#C5B9CE', type: 'phone', pro: false },
  { name: 'iphone-17-black', hex: '#1C1C1E', type: 'phone', pro: false },
  { name: 'iphone-17-white', hex: '#F2F2F2', type: 'phone', pro: false },
  { name: 'iphone-17-sage', hex: '#A3B5A2', type: 'phone', pro: false },
  { name: 'iphone-17e-black', hex: '#1E1E22', type: 'phone', pro: false },
  { name: 'iphone-17e-white', hex: '#F5F5F7', type: 'phone', pro: false },
  { name: 'iphone-16-black', hex: '#242528', type: 'phone', pro: false },
  { name: 'iphone-16-white', hex: '#F0F0F2', type: 'phone', pro: false },
  { name: 'iphone-16-ultramarine', hex: '#4E6D99', type: 'phone', pro: false },
  { name: 'iphone-17-pro-natural', hex: '#8B8682', type: 'phone', pro: true },
  { name: 'iphone-17-pro-black', hex: '#2B2A29', type: 'phone', pro: true },
  { name: 'iphone-17-pro-blue', hex: '#343E48', type: 'phone', pro: true },
  { name: 'iphone-17-pro-white', hex: '#E8E7E3', type: 'phone', pro: true },
  { name: 'ipad-11-blue', hex: '#7A98B3', type: 'ipad' },
  { name: 'ipad-11-silver', hex: '#E1E2E4', type: 'ipad' },
  { name: 'ipad-11-yellow', hex: '#E4CE75', type: 'ipad' },
  { name: 'ipad-mini-spacegray', hex: '#4D4E50', type: 'ipad' },
  { name: 'ipad-mini-starlight', hex: '#E3DCB8', type: 'ipad' },
  { name: 'ipad-air-blue', hex: '#879CB1', type: 'ipad' },
  { name: 'ipad-air-purple', hex: '#C6B9D8', type: 'ipad' },
  { name: 'ipad-pro-spaceblack', hex: '#232426', type: 'ipad' },
  { name: 'ipad-pro-silver', hex: '#E2E3E5', type: 'ipad' },
  { name: 'macbook-neo-silver', hex: '#DFE0E2', type: 'mac' },
  { name: 'macbook-neo-indigo', hex: '#2B3C53', type: 'mac' },
  { name: 'macbook-neo-blush', hex: '#D9B8B6', type: 'mac' },
  { name: 'macbook-air-midnight', hex: '#1E232B', type: 'mac' },
  { name: 'macbook-air-starlight', hex: '#E5DEC9', type: 'mac' },
  { name: 'macbook-air-silver', hex: '#E1E2E4', type: 'mac' },
  { name: 'macbook-pro-spaceblack', hex: '#1C1D1F', type: 'mac' },
  { name: 'macbook-pro-silver', hex: '#DFE0E2', type: 'mac' }
];

list.forEach(item => {
  let content = '';
  if (item.type === 'phone') {
    content = generatePhoneSvg(item.hex, item.name, item.pro);
  } else if (item.type === 'ipad') {
    content = generateIpadSvg(item.hex, item.name);
  } else {
    content = generateMacSvg(item.hex, item.name);
  }

  // Write both .svg and .webp (SVGs served directly)
  fs.writeFileSync(path.join(outDir, `${item.name}.svg`), content, 'utf8');
  fs.writeFileSync(path.join(outDir, `${item.name}.webp`), content, 'utf8');
});

console.log(`Generated ${list.length} studio product images in public/products/`);
