'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=15626392990&text=Hello!%20I%27m%20interested%20in%20your%20cleaning%20services.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@elizabethcleaningllc?_t=ZP-90fNQLdHu3z&_r=1',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/elizabeth__cleaning?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.975.015 6.737.072 5.5.128 4.57.267 3.793.52c-.806.26-1.488.607-2.163 1.282C.957 2.477.61 3.159.35 3.965c-.253.777-.392 1.707-.448 2.944C-.015 7.975 0 8.396 0 12.017s-.015 4.042.072 5.28c.056 1.237.195 2.167.448 2.944.26.806.607 1.488 1.282 2.163.675.675 1.357 1.022 2.163 1.282.777.253 1.707.392 2.944.448C7.975 23.985 8.396 24 12.017 24s4.042-.015 5.28-.072c1.237-.056 2.167-.195 2.944-.448.806-.26 1.488-.607 2.163-1.282.675-.675 1.022-1.357 1.282-2.163.253-.777.392-1.707.448-2.944.057-1.238.072-1.659.072-5.28s.015-4.042-.072-5.28c-.056-1.237-.195-2.167-.448-2.944-.26-.806-.607-1.488-1.282-2.163C21.523.957 20.841.61 20.035.35c-.777-.253-1.707-.392-2.944-.448C16.059.015 15.638 0 12.017 0zm0 2.16c3.543 0 3.967.014 5.368.072 1.337.054 2.071.29 2.562.483.64.25 1.094.553 1.576.997.482.444.785.898 1.035 1.538.193.491.429 1.225.483 2.562.058 1.401.072 1.825.072 5.368s-.014 3.967-.072 5.368c-.054 1.337-.29 2.071-.483 2.562-.25.64-.553 1.094-.997 1.576-.444.482-.898.785-1.538 1.035-.491.193-1.225.429-2.562.483-1.401.058-1.825.072-5.368.072s-3.967-.014-5.368-.072c-1.337-.054-2.071-.29-2.562-.483-.64-.25-1.094-.553-1.576-.997-.482-.444-.785-.898-1.035-1.538-.193-.491-.429-1.225-.483-2.562C2.175 15.984 2.16 15.56 2.16 12.017s.015-3.967.072-5.368c.054-1.337.29-2.071.483-2.562.25-.64.553-1.094.997-1.576.444-.482.898-.785 1.538-1.035.491-.193 1.225-.429 2.562-.483 1.401-.058 1.825-.072 5.368-.072zm0 3.703a6.314 6.314 0 100 12.628 6.314 6.314 0 000-12.628zM12.017 16.114a4.097 4.097 0 110-8.194 4.097 4.097 0 010 8.194zm6.58-10.825a1.48 1.48 0 11-2.96 0 1.48 1.48 0 012.96 0z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100083328251594&mibextid=wwXIfr&mibextid=wwXIfr',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {!logoError ? (
                <Image
                  src="/LOGOS/logo-en-blanco.png"
                  alt="Elizabeths Cleaning Service LLC"
                  width={288}
                  height={72}
                  className="h-14 w-auto sm:h-18 max-w-72"
                  priority
                  unoptimized
                  onError={() => {
                    console.error('Footer logo failed to load, using text fallback');
                    setLogoError(true);
                  }}
                />
              ) : (
                <span className="text-xl font-bold text-blue-500">
                  Elizabeths Cleaning
                </span>
              )}
            </Link>
            <p className="text-gray-300 mb-4">
              Relax — we&apos;ll handle the cleaning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: (562)-639-2990</p>
              <p>WhatsApp: +1-562-639-2990</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => {
              let hoverColor = 'hover:text-blue-500';
              if (social.name === 'WhatsApp') hoverColor = 'hover:text-green-500';
              if (social.name === 'TikTok') hoverColor = 'hover:text-pink-500';
              if (social.name === 'Instagram') hoverColor = 'hover:text-pink-600';
              if (social.name === 'Facebook') hoverColor = 'hover:text-blue-600';
              
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${hoverColor} transition-colors`}
                  aria-label={`${social.name === 'WhatsApp' ? 'Contact us on' : 'Follow us on'} ${social.name}`}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
          <p className="text-gray-300 text-sm">
            © {currentYear} Elizabeths Cleaning Service LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}