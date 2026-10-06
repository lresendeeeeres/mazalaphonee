const fs = require('fs');
const path = require('path');

// 1. components/brand/Logo.tsx
const logoCode = `import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const dimensions = {
    sm: { img: 32, text: 'text-sm' },
    md: { img: 44, text: 'text-base' },
    lg: { img: 60, text: 'text-xl' },
    xl: { img: 84, text: 'text-2xl' }
  }[size];

  return (
    <Link href="/" className={\`inline-flex items-center gap-3 group \${className}\`}>
      {/* Official Circular Logo with Gold & Red Accents */}
      <div 
        className="relative rounded-full overflow-hidden border border-mazala-gold/30 p-0.5 shadow-gold-glow group-hover:border-mazala-gold transition-colors duration-300 bg-mazala-bg"
        style={{ width: dimensions.img, height: dimensions.img }}
      >
        <Image
          src="/brand/logo.webp"
          alt="Mazala Phone ® Logo Oficial"
          width={dimensions.img}
          height={dimensions.img}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center font-heading tracking-apple-wide uppercase font-light text-mazala-text group-hover:text-white transition-colors">
            <span className="text-mazala-red font-normal">M</span>
            <span>AZALA</span>
            <span className="text-mazala-gold text-xs ml-1 font-sans">®</span>
          </div>
          <span className="text-[9px] tracking-widest uppercase text-mazala-gold font-sans font-medium">
            Especialista em Apple
          </span>
        </div>
      )}
    </Link>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../components/brand/Logo.tsx'), logoCode, 'utf8');

// 2. components/brand/BrandDivider.tsx
const dividerCode = `import React from 'react';

export function BrandDivider({ className = '' }: { className?: string }) {
  return (
    <div className={\`flex items-center justify-center gap-4 py-8 \${className}\`}>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-mazala-gold/40 to-mazala-gold/80" />
      <div className="text-mazala-gold flex items-center justify-center p-1.5 rounded-full border border-mazala-gold/30 bg-mazala-surface shadow-gold-glow">
        {/* Apple icon silhouette */}
        <svg viewBox="0 0 170 170" width="14" height="14" fill="currentColor">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.8-10.22-12.22-21.78-16.27-34.69-4.04-12.9-6.07-25.13-6.07-36.68 0-14.35 3.49-26.23 10.46-35.65 6.98-9.42 15.84-14.24 26.59-14.47 5.25 0 11.05 1.48 17.41 4.43 6.36 2.96 10.42 4.48 12.18 4.57 1.45 0 5.86-1.63 13.23-4.9 7.37-3.26 13.78-4.66 19.23-4.2 14.28 1.13 25.19 6.74 32.72 16.82-12.8 7.74-19.04 18.25-18.72 31.54.33 10.5 4.3 19.27 11.92 26.31 7.62 7.04 16.7 11.02 27.24 11.94-2.52 7.58-5.69 15.22-9.51 22.92zM119.22 33.15c0-7.39 2.65-14.37 7.95-20.93 5.3-6.56 11.9-10.97 19.8-13.22.44 2.17.66 4.19.66 6.07 0 7.39-2.8 14.53-8.4 21.43-5.6 6.9-12.27 11.23-20.01 13-1.09-1.96-1.63-3.75-1.63-5.35z"/>
        </svg>
      </div>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-l from-transparent via-mazala-gold/40 to-mazala-gold/80" />
    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../components/brand/BrandDivider.tsx'), dividerCode, 'utf8');

// 3. components/brand/WhatsAppButton.tsx
const waCode = `import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  variantInfo?: string;
  className?: string;
}

export function WhatsAppButton({ productName, variantInfo, className = '' }: WhatsAppButtonProps) {
  let message = "Olá Mazala Phone! Gostaria de tirar dúvidas sobre os produtos Apple.";
  if (productName) {
    message = \`Olá Mazala Phone! Tenho interesse no \${productName}\${variantInfo ? \` (\${variantInfo})\` : ''}. Poderia me atender?\`;
  }

  const encodedUrl = \`https://wa.me/5532988547377?text=\${encodeURIComponent(message)}\`;

  return (
    <a
      href={encodedUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={\`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-emerald-400/30 \${className}\`}
      aria-label="Falar no WhatsApp com especialista Mazala Phone"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-mazala-red rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-mazala-red rounded-full" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight">Fale Conosco</span>
        <span className="text-[10px] text-emerald-100 font-light">Online em Cataguases</span>
      </div>
    </a>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../components/brand/WhatsAppButton.tsx'), waCode, 'utf8');

console.log('Successfully written brand components');
