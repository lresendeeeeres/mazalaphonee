import React from 'react';
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
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
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
