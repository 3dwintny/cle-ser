'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {!logoError ? (
                <Image
                  src="/LOGOS/logo-sin-fondo.png"
                  alt="Elizabeth's Cleaning Service"
                  width={120}
                  height={120}
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                  priority
                  unoptimized
                  onError={() => {
                    console.error('Navbar logo failed to load, using text fallback');
                    setLogoError(true);
                  }}
                />
              ) : (
                <span className={cn(
                  'text-2xl sm:text-3xl font-bold transition-colors',
                  isScrolled 
                    ? 'text-black hover:opacity-80' 
                    : 'text-black hover:opacity-80'
                )}>
                  Elizabeth&apos;s Cleaning
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === item.href
                      ? isScrolled
                        ? 'text-black border-b-2 border-black shadow-sm bg-elizabeth-gradient-diagonal'
                        : 'text-black bg-white border-b-2 border-black shadow-sm'
                      : isScrolled
                        ? 'text-black hover:opacity-80 hover:bg-white/50'
                        : 'text-black hover:opacity-80 hover:bg-white/50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={cn(
              'flex items-center space-x-2 transition-colors',
              isScrolled ? 'text-black' : 'text-black'
            )}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-sm font-medium">(562) 639-2990</span>
            </div>
            <a href="tel:+1-562-639-2990">
              <Button 
                size="sm" 
                className="bg-black hover:bg-gray-800 text-white border border-black shadow-md transition-colors"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset',
                isScrolled 
                  ? 'text-black hover:opacity-80 focus:ring-black' 
                  : 'text-black hover:opacity-80 focus:ring-black'
              )}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  pathname === item.href
                    ? isScrolled
                      ? 'text-black border-l-4 border-black bg-elizabeth-gradient-diagonal'
                      : 'text-black bg-white border-l-4 border-black'
                    : 'text-black hover:opacity-80 hover:bg-gray-50'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-black border-t pt-3">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-sm font-medium">(562) 639-2990</span>
              </div>
              <a href="tel:+1-562-639-2990" className="block">
                <Button 
                  size="sm" 
                  className="w-full bg-black hover:bg-gray-800 text-white border border-black"
                >
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}