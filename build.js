const fs = require('fs'); const parts = [];
parts.push(`<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MAZALA PHONE | Especialista em Apple - Cataguases e Região</title>
  <meta name="description" content="Compre iPhone, iPad, MacBook e Apple Watch com 1 ano de garantia e entrega rápida em Cataguases e Região. Parcele em até 18x ou troque seu usado." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>??</text></svg>">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'sans-serif'],
          },
          colors: {
            apple: {
              bg: '#f5f5f7',
              dark: '#1d1d1f',
              gray: '#86868b',
              lightgray: '#d2d2d7',
              blue: '#0071e3',
              card: '#ffffff',
            },
            whatsapp: {
              DEFAULT: '#25D366',
              dark: '#128C7E',
              hover: '#1ebe5d'
            },
            emeraldAccent: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857'
            }
          },
          boxShadow: {
            'apple': '0 4px 24px rgba(0, 0, 0, 0.04)',
            'apple-hover': '0 12px 32px rgba(0, 0, 0, 0.08)',
            'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.35)',
            'glow-wa': '0 8px 25px rgba(37, 211, 102, 0.4)'
          }
        }
      }
    }
  </script>
  <style>
    ::-webkit-scrollbar { height: 6px; width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #c7c7cc; border-radius: 9999px; }
    ::-webkit-scrollbar-thumb:hover { background: #8e8e93; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .glass-nav { background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
    .glass-dark { background: rgba(29, 29, 31, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
    .text-gradient { background: linear-gradient(180deg, #1d1d1f 0%, #434344 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    @keyframes pulse-subtle { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.85; transform: scale(1.03); } }
    .animate-pulse-subtle { animation: pulse-subtle 3s infinite ease-in-out; }
  </style>
</head>
<body class="bg-[#f5f5f7] text-[#1d1d1f] antialiased selection:bg-black selection:text-white font-sans">
`);
parts.push(`
  <aside aria-label="Avisos e Destaques" class="fixed top-0 left-0 right-0 z-50 bg-[#1d1d1f] text-white text-[11px] sm:text-xs font-medium py-2 px-3 text-center tracking-wide flex items-center justify-center gap-2 border-b border-white/10 shadow-sm">
    <span class="inline-flex items-center justify-center bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">OFICIAL</span>
    <span>??? <strong>1 ANO DE GARANTIA</strong> EM TODOS OS SEMINOVOS • Atendimento VIP em Cataguases e Região</span>
  </aside>

  <header class="fixed top-[33px] sm:top-[34px] left-0 right-0 z-40 glass-nav border-b border-black/5 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
          <i data-lucide="apple" class="w-4 h-4 fill-current"></i>
        </div>
        <div>
          <div class="flex items-center gap-1">
            <span class="font-black text-sm sm:text-base tracking-tighter text-[#1d1d1f]">M?Z?L?</span>
            <span class="text-xs sm:text-sm font-semibold tracking-widest text-[#86868b]">PHONE</span>
          </div>
          <p class="text-[9px] font-medium text-emerald-600 -mt-1 tracking-wider uppercase">Especialista em Apple</p>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-7 text-xs font-medium text-[#1d1d1f]/80">
        <a href="#catalogo" class="hover:text-black transition-colors">Catálogo Completo</a>
        <a href="#tradein" class="hover:text-black transition-colors flex items-center gap-1">
          <span>Troque seu Usado</span>
          <span class="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-1.5 py-0.2 rounded-full">Trade-in</span>
        </a>
        <a href="#diferenciais" class="hover:text-black transition-colors">1 Ano Garantia</a>
        <a href="#depoimentos" class="hover:text-black transition-colors">Depoimentos</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20dos%20iPhones%20com%201%20ano%20de%20garantia!" target="_blank" class="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm py-2 px-3.5 sm:px-4 rounded-full shadow-sm hover:shadow-glow-emerald transition-all duration-300 transform active:scale-95">
          <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
          <span class="hidden sm:inline">Comprar no WhatsApp</span>
          <span class="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  </header>

  <div class="h-24 sm:h-28"></div>

  <section class="relative pt-6 pb-14 sm:py-16 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 bg-black/[0.04] border border-black/10 rounded-full px-3.5 py-1.5 mb-6 text-xs font-semibold text-neutral-700 backdrop-blur-sm shadow-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>?? Cataguases & Região da Zona da Mata</span>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient leading-[1.1] mb-5">
          Seu mundo Apple começa aqui.
        </h1>

        <p class="text-sm sm:text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          iPhones, iPads, MacBooks e Apple Watch com <span class="text-[#1d1d1f] font-semibold">1 ano de garantia real</span>, procedência comprovada e entrega rápida em Cataguases e toda a região.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10">
          <a href="#catalogo" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d1d1f] hover:bg-black text-white text-sm sm:text-base font-semibold py-3.5 px-7 rounded-2xl shadow-md hover:shadow-apple-hover transition-all duration-300">
            <span>Ver Catálogo e Preços</span>
            <i data-lucide="arrow-down" class="w-4 h-4"></i>
          </a>
          <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mazala%20Phone%20e%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-semibold py-3.5 px-7 rounded-2xl shadow-glow-emerald transition-all duration-300 transform active:scale-95">
            <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
            <span>Falar com Especialista</span>
          </a>
        </div>

        <div class="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-black/5 text-center">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
            </div>
            <span class="text-xs sm:text-sm font-bold text-[#1d1d1f]">1 Ano de Garantia</span>
            <span class="text-[10px] sm:text-xs text-[#86868b]">Segurança total</span>
          </div>

          <div class="flex flex-col items-center border-x border-black/5 px-2">
            <div class="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5">
              <i data-lucide="credit-card" class="w-4 h-4"></i>
            </div>
            <span class="text-xs sm:text-sm font-bold text-[#1d1d1f]">Até 18x no Cartão</span>
            <span class="text-[10px] sm:text-xs text-[#86868b]">Condições flexíveis</span>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
              <i data-lucide="star" class="w-4 h-4 fill-amber-500 text-amber-500"></i>
            </div>
            <span class="text-xs sm:text-sm font-bold text-[#1d1d1f]">+900 Clientes</span>
            <span class="text-[10px] sm:text-xs text-[#86868b]">100% Satisfeitos</span>
          </div>
        </div>
      </div>

      <div class="mt-10 sm:mt-14 relative rounded-3xl bg-gradient-to-b from-white to-[#ececee] p-6 sm:p-10 border border-black/5 shadow-apple overflow-hidden">
        <div class="absolute top-4 right-4 sm:top-6 sm:right-6">
          <span class="inline-flex items-center gap-1.5 bg-black text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Destaque do Mês
          </span>
        </div>

        <div class="grid md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-6 text-center md:text-left">
            <span class="text-xs font-bold uppercase tracking-widest text-[#86868b]">Titânio Deslumbrante</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] mt-1 mb-3">iPhone 16 Pro</h2>
            <p class="text-xs sm:text-sm text-[#86868b] mb-6">
              Chip A18 Pro, controle de câmera inovador, estrutura em titânio aeroespacial e bateria de longa duração.
            </p>
            
            <div class="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-black/5 inline-block w-full sm:w-auto mb-6">
              <div class="text-xs text-[#86868b]">À vista com desconto especial:</div>
              <div class="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]">R$ 4.699,00</div>
              <div class="text-xs font-semibold text-emerald-600 mt-0.5">ou 12x de R$ 321,09 no cartão</div>
            </div>

            <div>
              <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20garantir%20o%20iPhone%2016%20Pro%20128GB%20por%20R%24%204.699%2C00%20anunciado%20no%20site." target="_blank" class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                <span>Garantir Meu iPhone 16 Pro</span>
              </a>
            </div>
          </div>

          <div class="md:col-span-6 flex justify-center">
            <div class="relative max-w-[280px] sm:max-w-[340px]">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha" alt="iPhone 16 Pro Titânio Oficial Apple" class="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`);
parts.push(`
  <section class="py-8 bg-white border-y border-black/5">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-base sm:text-lg font-bold text-[#1d1d1f] flex items-center gap-2">
            <span class="flex h-3 w-3 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Stories de Seminovos Selecionados
          </h2>
          <p class="text-xs text-[#86868b]">Aparelhos 100% testados, saúde de bateria excelente e 1 ano de garantia.</p>
        </div>
        <span class="text-[11px] font-semibold text-[#86868b] hidden sm:block">Deslize para ver ?</span>
      </div>

      <div class="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
        <!-- 16 Pro -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20vi%20o%20iPhone%2016%20Pro%20nos%20Stories%20por%20R%24%204.699%2C00%20e%20gostaria%20de%20reservar!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">16 Pro</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">1 Ano Gar.</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 16 Pro" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 16 Pro 128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 4.699</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 321,09</div>
          </div>
        </a>

        <!-- 15 Pro -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20vi%20o%20iPhone%2015%20Pro%20por%20R%24%204.199%2C00%20e%20gostaria%20de%20saber%20mais!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">15 Pro</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">Seminovo</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 15 Pro" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 15 Pro 128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 4.199</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 286,90</div>
          </div>
        </a>

        <!-- 15 -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20vi%20o%20iPhone%2015%20por%20R%24%203.699%2C00%20e%20gostaria%20de%20comprar!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">Top Vendas</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">1 Ano</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 15" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 15 128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 3.699</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 308,25</div>
          </div>
        </a>

        <!-- 14 -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20gostaria%20do%20iPhone%2014%20128GB%20por%20R%24%202.799%2C00!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-neutral-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">Custo-Benefício</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">Grade A+</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 14" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 14 128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 2.799</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 249,92</div>
          </div>
        </a>

        <!-- 13 -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20gostaria%20do%20iPhone%2013%20128GB%20por%20R%24%202.199%2C00!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-rose-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">Mais Vendido</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">Seminovo</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 13" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 13 128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 2.199</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 208,25</div>
          </div>
        </a>

        <!-- 12 -->
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20gostaria%20do%20iPhone%2012%20por%20R%24%201.799%2C00!" target="_blank" class="flex-shrink-0 w-36 sm:w-44 rounded-2xl bg-[#f5f5f7] p-3 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between group shadow-sm">
          <div class="flex justify-between items-start">
            <span class="bg-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">Melhor Preço</span>
            <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full">Garantia</span>
          </div>
          <div class="py-2 flex justify-center">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha" alt="iPhone 12" class="h-24 sm:h-28 object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div class="text-xs font-bold text-[#1d1d1f] truncate">iPhone 12 64/128GB</div>
            <div class="text-[13px] font-extrabold text-black">R$ 1.799</div>
            <div class="text-[10px] text-emerald-600 font-medium">12x R$ 169,90</div>
          </div>
        </a>
      </div>
    </div>
  </section>
`);
parts.push(`
  <section id="catalogo" class="py-14 sm:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Catálogo Oficial & Preços Reais
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] mt-3 mb-3">
          Escolha o seu próximo Apple.
        </h2>
        <p class="text-xs sm:text-base text-[#86868b]">
          Aparelhos selecionados com 1 ano de garantia total, laudo técnico e atendimento personalizado no WhatsApp.
        </p>
      </div>

      <div class="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
        <button onclick="filterCategory('all', this)" class="category-btn active px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-[#1d1d1f] text-white shadow-sm">
          Todos os Produtos
        </button>
        <button onclick="filterCategory('iphones', this)" class="category-btn px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-[#1d1d1f] hover:bg-neutral-200 border border-black/5">
          iPhones
        </button>
        <button onclick="filterCategory('macbooks', this)" class="category-btn px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-[#1d1d1f] hover:bg-neutral-200 border border-black/5">
          MacBooks
        </button>
        <button onclick="filterCategory('ipads', this)" class="category-btn px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-[#1d1d1f] hover:bg-neutral-200 border border-black/5">
          iPads
        </button>
        <button onclick="filterCategory('watch', this)" class="category-btn px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-[#1d1d1f] hover:bg-neutral-200 border border-black/5">
          Apple Watch
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 16 Pro -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Lançamento
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha" alt="iPhone 16 Pro 128GB" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 16 Pro</h3>
              <p class="text-xs text-[#86868b] font-medium">128GB • Titânio Natural • Chip A18 Pro</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Valor promocional à vista:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 4.699,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 321,09 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20iPhone%2016%20Pro%20128GB%20(R%24%204.699%2C00).%20Poderia%20me%20passar%20as%20cores%20dispon%C3%ADveis%3F" target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- 15 Pro -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-[#1d1d1f] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Titânio
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 15 Pro 128GB" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 15 Pro</h3>
              <p class="text-xs text-[#86868b] font-medium">128GB • Titânio • Chip A17 Pro com USB-C</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Valor promocional à vista:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 4.199,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 286,90 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20iPhone%2015%20Pro%20128GB%20(R%24%204.199%2C00).%20Ainda%20tem%20em%20estoque%3F" target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- 15 -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Dynamic Island
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 15 128GB" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 15</h3>
              <p class="text-xs text-[#86868b] font-medium">128GB • Câmera 48MP • Conexão USB-C</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Valor promocional à vista:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 3.699,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 308,25 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Quero%20aproveitar%20a%20oferta%20do%20iPhone%2015%20128GB%20(R%24%203.699%2C00).%20Como%20funciona%20a%20entrega%3F" target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- 14 -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-neutral-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Alta Demanda
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 14 128GB" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 14</h3>
              <p class="text-xs text-[#86868b] font-medium">128GB • Modo Ação • Excelente Bateria</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Valor promocional à vista:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 2.799,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 249,92 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20o%20iPhone%2014%20128GB%20por%20R%24%202.799%2C00." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- 13 -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Campeão de Vendas
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?wid=5120&hei=2880&fmt=p-jpg" alt="iPhone 13 128GB" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 13</h3>
              <p class="text-xs text-[#86868b] font-medium">128GB • Modo Cinema • Chip A15 Bionic</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Valor promocional à vista:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 2.199,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 208,25 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Quero%20comprar%20o%20iPhone%2013%20128GB%20por%20R%24%202.199%2C00%20com%201%20ano%20de%20garantia." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- 12 -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="iphones">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Melhor Preço
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha" alt="iPhone 12" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">iPhone 12</h3>
              <p class="text-xs text-[#86868b] font-medium">64GB / 128GB • Tela Super Retina XDR • 5G</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">A partir de:</span>
              <span class="text-2xl font-black text-[#1d1d1f]">R$ 1.799,00</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">ou 12x de R$ 169,90 no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20disponibilidade%20do%20iPhone%2012%20a%20partir%20de%20R%24%201.799%2C00." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Comprar no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- MacBook -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="macbooks">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-purple-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Apple Silicon
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1603332211000" alt="MacBook Apple" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">MacBook Air & Pro</h3>
              <p class="text-xs text-[#86868b] font-medium">Apple Silicon M-Series com bateria de alta autonomia</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Consulte modelos & configurações:</span>
              <span class="text-xl font-black text-[#1d1d1f]">Preço sob Consulta</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">Parcelamento em até 18x no cartão</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20os%20modelos%20e%20pre%C3%A7os%20de%20MacBook%20dispon%C3%ADveis%20na%20Mazala%20Phone." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Consultar MacBooks no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- iPad -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="ipads">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-cyan-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Produtividade
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202203?wid=2560&hei=1440&fmt=p-jpg" alt="Linha iPad Apple" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">Linha Apple iPad (Air, 10ª, Pro)</h3>
              <p class="text-xs text-[#86868b] font-medium">Perfeito para estudos, gráficos e rotina profissional</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Consulte modelos & capacidades:</span>
              <span class="text-xl font-black text-[#1d1d1f]">Preço sob Consulta</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">Novos & Seminovos com Garantia</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20os%20modelos%20de%20iPad%20dispon%C3%ADveis%20na%20loja." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Consultar iPads no WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Watch -->
        <div class="product-card group bg-white rounded-3xl p-6 border border-black/5 hover:border-black/15 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" data-category="watch">
          <div>
            <div class="flex justify-between items-center mb-3">
              <span class="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Saúde & Fitness
              </span>
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <i data-lucide="shield" class="w-3 h-3 text-emerald-600"></i>
                1 Ano Garantia
              </span>
            </div>
            <div class="h-56 flex items-center justify-center p-4">
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202409?wid=680&hei=528&fmt=p-jpg" alt="Apple Watch" class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />
            </div>
            <div class="mt-2 text-center">
              <h3 class="text-lg font-bold text-[#1d1d1f]">Apple Watch (SE, Series & Ultra)</h3>
              <p class="text-xs text-[#86868b] font-medium">Monitoramento cardíaco, ECG e treinos avançados</p>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-black/5">
            <div class="text-center mb-4">
              <span class="text-xs text-[#86868b] block">Consulte tamanhos & pulseiras:</span>
              <span class="text-xl font-black text-[#1d1d1f]">Preço sob Consulta</span>
              <span class="block text-xs font-bold text-emerald-600 mt-0.5">Pronta entrega em Cataguases</span>
            </div>
            <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20os%20modelos%20de%20Apple%20Watch%20dispon%C3%ADveis%20na%20Mazala%20Phone." target="_blank" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all transform active:scale-98">
              <i data-lucide="message-circle" class="w-4 h-4 fill-white"></i>
              <span>Consultar Watch no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`);
parts.push(`
  <!-- SIMULADOR TRADE-IN -->
  <section id="tradein" class="py-14 sm:py-20 bg-gradient-to-b from-white to-[#ececee] border-y border-black/5">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-apple-hover">
        <div class="text-center max-w-xl mx-auto mb-8">
          <span class="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
            Programa Mazala Trade-in
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">
            Troque seu iPhone usado por um novo.
          </h2>
          <p class="text-xs sm:text-sm text-[#86868b] mt-2">
            Seu aparelho atual entra como parte do pagamento com a melhor avaliação de Cataguases e Região. Simule em segundos:
          </p>
        </div>

        <form id="tradeInForm" onsubmit="handleTradeIn(event)" class="space-y-4 sm:space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="currentModel" class="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-1.5">
                1. Qual é o seu modelo atual?
              </label>
              <select id="currentModel" required class="w-full bg-[#f5f5f7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1d1d1f] font-medium focus:ring-2 focus:ring-black focus:outline-none transition-all">
                <option value="" disabled selected>Selecione seu modelo atual...</option>
                <option value="iPhone 11 ou anterior">iPhone 11 ou anterior</option>
                <option value="iPhone 12 / 12 Mini / 12 Pro">iPhone 12 / 12 Mini / 12 Pro</option>
                <option value="iPhone 13 / 13 Mini / 13 Pro">iPhone 13 / 13 Mini / 13 Pro</option>
                <option value="iPhone 14 / 14 Plus / 14 Pro">iPhone 14 / 14 Plus / 14 Pro</option>
                <option value="iPhone 15 / 15 Plus / 15 Pro">iPhone 15 / 15 Plus / 15 Pro</option>
                <option value="Outro Smartphone (Android / Outros)">Outro Smartphone (Android / Outros)</option>
              </select>
            </div>

            <div>
              <label for="batteryHealth" class="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-1.5">
                2. Saúde da bateria aproximada
              </label>
              <select id="batteryHealth" required class="w-full bg-[#f5f5f7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1d1d1f] font-medium focus:ring-2 focus:ring-black focus:outline-none transition-all">
                <option value="" disabled selected>Selecione a saúde da bateria...</option>
                <option value="Acima de 85% (Ótimo estado)">Acima de 85% (Ótimo estado)</option>
                <option value="Entre 80% e 85% (Bom estado)">Entre 80% e 85% (Bom estado)</option>
                <option value="Abaixo de 80% ou Manutenção">Abaixo de 80% ou Manutenção</option>
                <option value="Não sei informar">Não sei informar</option>
              </select>
            </div>

            <div>
              <label for="targetModel" class="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-1.5">
                3. Qual modelo você quer comprar?
              </label>
              <select id="targetModel" required class="w-full bg-[#f5f5f7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1d1d1f] font-medium focus:ring-2 focus:ring-black focus:outline-none transition-all">
                <option value="" disabled selected>Selecione o modelo desejado...</option>
                <option value="iPhone 16 Pro 128GB (R$ 4.699,00)">iPhone 16 Pro 128GB (R$ 4.699,00)</option>
                <option value="iPhone 15 Pro 128GB (R$ 4.199,00)">iPhone 15 Pro 128GB (R$ 4.199,00)</option>
                <option value="iPhone 15 128GB (R$ 3.699,00)">iPhone 15 128GB (R$ 3.699,00)</option>
                <option value="iPhone 14 128GB (R$ 2.799,00)">iPhone 14 128GB (R$ 2.799,00)</option>
                <option value="iPhone 13 128GB (R$ 2.199,00)">iPhone 13 128GB (R$ 2.199,00)</option>
                <option value="iPhone 12 (R$ 1.799,00)">iPhone 12 (R$ 1.799,00)</option>
                <option value="MacBook / iPad / Apple Watch">MacBook / iPad / Apple Watch</option>
              </select>
            </div>

            <div>
              <label for="userName" class="block text-xs font-bold uppercase tracking-wider text-[#1d1d1f] mb-1.5">
                4. Seu Nome e Cidade
              </label>
              <input type="text" id="userName" placeholder="Ex: Lucas - Cataguases" required class="w-full bg-[#f5f5f7] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1d1d1f] font-medium focus:ring-2 focus:ring-black focus:outline-none transition-all" />
            </div>
          </div>

          <div class="pt-2">
            <button type="submit" class="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-glow-emerald transition-all transform active:scale-98">
              <i data-lucide="calculator" class="w-5 h-5"></i>
              <span>Calcular Avaliação e Receber Proposta no WhatsApp</span>
            </button>
            <p class="text-center text-[11px] text-[#86868b] mt-2">
              ?? Resposta rápida em minutos por um de nossos especialistas credenciados.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- DIFERENCIAIS -->
  <section id="diferenciais" class="py-14 sm:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-[#86868b]">Padrão de Excelência</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] mt-2 mb-3">
          A experiência Apple que você merece.
        </h2>
        <p class="text-xs sm:text-base text-[#86868b]">
          Comprar um iPhone na Mazala Phone tem a segurança, o suporte e a garantia que você procura.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#f5f5f7] rounded-3xl p-6 sm:p-8 border border-black/5 hover:border-black/10 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-5 shadow-sm">
            <i data-lucide="shield-check" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-[#1d1d1f] mb-2">1 Ano de Garantia Completa</h3>
          <p class="text-xs sm:text-sm text-[#86868b] leading-relaxed">
            Diferente de outras lojas que dão apenas 90 dias, a Mazala Phone oferece 365 dias de cobertura com termo e suporte local em Cataguases e região.
          </p>
        </div>

        <div class="bg-[#f5f5f7] rounded-3xl p-6 sm:p-8 border border-black/5 hover:border-black/10 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-sm">
            <i data-lucide="check-check" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-[#1d1d1f] mb-2">Laudo de +40 Itens Testados</h3>
          <p class="text-xs sm:text-sm text-[#86868b] leading-relaxed">
            Face ID, câmeras, microfones, display True Tone, conexões e bateria 100% originais e inspecionados rigorosamente antes da entrega.
          </p>
        </div>

        <div class="bg-[#f5f5f7] rounded-3xl p-6 sm:p-8 border border-black/5 hover:border-black/10 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-sm">
            <i data-lucide="truck" class="w-6 h-6"></i>
          </div>
          <h3 class="text-lg font-bold text-[#1d1d1f] mb-2">Entrega Expressa Regional</h3>
          <p class="text-xs sm:text-sm text-[#86868b] leading-relaxed">
            Entrega em mãos com total segurança em Cataguases, Leopoldina, Miraí, Astolfo Dutra, Ubá e cidades vizinhas com suporte na migração dos seus dados.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section id="depoimentos" class="py-14 sm:py-20 bg-[#f5f5f7]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <div class="inline-flex items-center gap-1 text-amber-500 mb-2">
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <span class="text-xs font-bold text-[#1d1d1f] ml-1.5">5.0 / 5.0 no Google</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1d1d1f] mb-3">
          Quem compra na Mazala recomenda.
        </h2>
        <p class="text-xs sm:text-base text-[#86868b]">
          Mais de 900 clientes atendidos e satisfeitos em toda a nossa região.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-3xl p-6 border border-black/5 shadow-apple flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-3">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <p class="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-4">
              "Comprei meu iPhone 15 Pro na Mazala Phone e o aparelho parecia ter saído da caixa lacrada! Bateria impecável e o 1 ano de garantia me deu total tranquilidade. Entrega super rápida em Cataguases."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-black/5">
            <div class="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-xs text-neutral-700">
              GA
            </div>
            <div>
              <div class="text-xs font-bold text-[#1d1d1f]">Gabriel Andrade</div>
              <div class="text-[10px] text-[#86868b]">Cliente Verificado • Cataguases/MG</div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-black/5 shadow-apple flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-3">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <p class="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-4">
              "Fiz a troca do meu iPhone 11 pelo 14 usando o Trade-in. Avaliaram super bem meu usado e ainda parcelaram a diferença no cartão. Atendimento nota 1000!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-black/5">
            <div class="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-xs text-neutral-700">
              MS
            </div>
            <div>
              <div class="text-xs font-bold text-[#1d1d1f]">Mariana Silva</div>
              <div class="text-[10px] text-[#86868b]">Cliente Verificada • Leopoldina/MG</div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 border border-black/5 shadow-apple flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1 text-amber-500 mb-3">
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
              <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            </div>
            <p class="text-xs sm:text-sm text-neutral-700 italic leading-relaxed mb-4">
              "O atendimento pelo WhatsApp foi perfeito do início ao fim. Tiraram todas as dúvidas, me enviaram vídeos do aparelho e me entregaram no mesmo dia. Recomendo de olhos fechados!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-black/5">
            <div class="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-xs text-neutral-700">
              RF
            </div>
            <div>
              <div class="text-xs font-bold text-[#1d1d1f]">Rodrigo Fernandes</div>
              <div class="text-[10px] text-[#86868b]">Cliente Verificado • Ubá/MG</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 rounded-3xl bg-black text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4 text-center sm:text-left">
          <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <i data-lucide="package-check" class="w-6 h-6 text-emerald-400"></i>
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold">Experiência Unboxing Completa Mazala Phone</h4>
            <p class="text-xs text-white/70">Aparelhos higienizados, embalagem exclusiva, cabo e termo de 1 ano de garantia.</p>
          </div>
        </div>
        <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20ver%20fotos%20e%20v%C3%ADdeos%20reais%20dos%20aparelhos%20dispon%C3%ADveis%20na%20loja." target="_blank" class="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm font-bold py-3 px-5 rounded-xl transition-all flex-shrink-0">
          <i data-lucide="camera" class="w-4 h-4"></i>
          <span>Solicitar Vídeos no WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="py-14 sm:py-16 bg-[#1d1d1f] text-white text-center relative overflow-hidden">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
      <span class="inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
        Atendimento Personalizado
      </span>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight mb-4">
        Pronto para ter seu próximo Apple em mãos?
      </h2>
      <p class="text-xs sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
        Converse agora com nossa equipe em Cataguases, tire suas dúvidas e receba seu iPhone hoje mesmo com 1 ano de garantia.
      </p>

      <a href="https://wa.me/5532999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20da%20Mazala%20Phone%20para%20fechar%20meu%20pedido!" target="_blank" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm sm:text-base py-4 px-8 rounded-2xl shadow-glow-emerald transition-all transform hover:scale-105 active:scale-95">
        <i data-lucide="message-circle" class="w-5 h-5 fill-black"></i>
        <span>Iniciar Conversa no WhatsApp VIP</span>
      </a>

      <div class="flex items-center justify-center gap-6 mt-8 text-xs text-white/50">
        <span class="flex items-center gap-1.5">? Sem burocracia</span>
        <span class="flex items-center gap-1.5">? Pagamento facilitado</span>
        <span class="flex items-center gap-1.5">? Suporte pós-venda</span>
      </div>
    </div>
  </section>

  <!-- FOOTER COM DISCLAIMER JURÍDICO -->
  <footer class="bg-black text-[#86868b] text-xs py-12 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-bold">
              <i data-lucide="apple" class="w-4 h-4 fill-current"></i>
            </div>
            <span class="font-extrabold text-white text-sm tracking-wider">M?Z?L? PHONE</span>
          </div>
          <p class="text-[11px] leading-relaxed max-w-sm mb-3">
            Especialistas em venda de iPhones, MacBooks, iPads e Apple Watch novos e seminovos premium com 1 ano de garantia para Cataguases e toda a Região da Zona da Mata.
          </p>
          <div class="text-[11px] text-white/80">
            ?? Cataguases - MG | Atendimento Regional
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold text-xs uppercase tracking-wider mb-3">Acesso Rápido</h4>
          <ul class="space-y-2 text-[11px]">
            <li><a href="#catalogo" class="hover:text-white transition-colors">Catálogo de iPhones</a></li>
            <li><a href="#tradein" class="hover:text-white transition-colors">Simulador Trade-in</a></li>
            <li><a href="#diferenciais" class="hover:text-white transition-colors">Garantia de 1 Ano</a></li>
            <li><a href="#depoimentos" class="hover:text-white transition-colors">Avaliações de Clientes</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold text-xs uppercase tracking-wider mb-3">Horário & Contato</h4>
          <p class="text-[11px] leading-relaxed mb-2">
            Segunda a Sexta: 09h às 19h<br>
            Sábado: 09h às 14h
          </p>
          <a href="https://wa.me/5532999999999" target="_blank" class="inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] hover:underline">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            (32) 99999-9999
          </a>
        </div>
      </div>

      <div class="pt-6 border-t border-white/10 text-[10px] leading-relaxed text-neutral-400 space-y-2">
        <p>
          <strong>Aviso Legal & Isenção de Responsabilidade:</strong> A Mazala Phone é uma loja independente especializada na comercialização e suporte de produtos e acessórios Apple novos e seminovos selecionados. Não possui afiliação direta, endosso ou vínculo societário com a Apple Inc. Apple, o logotipo da Apple, iPhone, iPad, MacBook e Apple Watch são marcas registradas de titularidade exclusiva da Apple Inc., nos Estados Unidos e em outros países.
        </p>
        <p class="text-center pt-2 text-neutral-400">
          © <span id="currentYear"></span> MAZALA PHONE. Todos os direitos reservados. Cataguases - MG.
        </p>
      </div>
    </div>
  </footer>

  <!-- BOTÃO FLUTUANTE WHATSAPP -->
  <aside aria-label="Atendimento Rápido" class="fixed bottom-5 right-5 z-50">
    <a href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Estou%20no%20site%20da%20Mazala%20Phone%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida." target="_blank" aria-label="Fale conosco no WhatsApp" class="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-glow-wa hover:scale-105 active:scale-95 transition-all duration-300">
      <i data-lucide="message-circle" class="w-6 h-6 fill-white"></i>
      <span class="hidden sm:inline text-xs font-extrabold tracking-wide uppercase">Falar no WhatsApp</span>
    </a>
  </aside>

  <script>
    lucide.createIcons();
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    function filterCategory(category, btnElement) {
      const buttons = document.querySelectorAll('.category-btn');
      buttons.forEach(btn => {
        btn.classList.remove('bg-[#1d1d1f]', 'text-white');
        btn.classList.add('bg-white', 'text-[#1d1d1f]');
      });

      btnElement.classList.add('bg-[#1d1d1f]', 'text-white');
      btnElement.classList.remove('bg-white', 'text-[#1d1d1f]');

      const products = document.querySelectorAll('.product-card');
      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'flex';
        } else {
          product.style.display = 'none';
        }
      });
    }

    function handleTradeIn(event) {
      event.preventDefault();
      const currentModel = document.getElementById('currentModel').value;
      const batteryHealth = document.getElementById('batteryHealth').value;
      const targetModel = document.getElementById('targetModel').value;
      const userName = document.getElementById('userName').value;

      const message = \`Olá, Mazala Phone! Me chamo \${userName} e fiz a simulação de Trade-in no site:\\n\\n\` +
                      \`?? Meu aparelho atual: \${currentModel}\\n\` +
                      \`?? Saúde da bateria: \${batteryHealth}\\n\` +
                      \`?? Modelo que quero comprar: \${targetModel}\\n\\n\` +
                      \`Gostaria de saber qual a avaliação estimada para o meu aparelho na troca!\`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = \`https://wa.me/5532999999999?text=\${encodedMessage}\`;
      window.open(whatsappUrl, '_blank');
    }
  </script>
</body>
</html>
`);

fs.writeFileSync('index.html', parts.join(''), 'utf8');
console.log('BUILD SUCCESS: index.html generated successfully!');
