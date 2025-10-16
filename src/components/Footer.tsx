'use client';

import Link from 'next/link';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.975.015 6.737.072 5.5.128 4.57.267 3.793.52c-.806.26-1.488.607-2.163 1.282C.957 2.477.61 3.159.35 3.965c-.253.777-.392 1.707-.448 2.944C-.015 7.975 0 8.396 0 12.017s-.015 4.042.072 5.28c.056 1.237.195 2.167.448 2.944.26.806.607 1.488 1.282 2.163.675.675 1.357 1.022 2.163 1.282.777.253 1.707.392 2.944.448C7.975 23.985 8.396 24 12.017 24s4.042-.015 5.28-.072c1.237-.056 2.167-.195 2.944-.448.806-.26 1.488-.607 2.163-1.282.675-.675 1.022-1.357 1.282-2.163.253-.777.392-1.707.448-2.944.057-1.238.072-1.659.072-5.28s.015-4.042-.072-5.28c-.056-1.237-.195-2.167-.448-2.944-.26-.806-.607-1.488-1.282-2.163C21.523.957 20.841.61 20.035.35c-.777-.253-1.707-.392-2.944-.448C16.059.015 15.638 0 12.017 0zm0 2.16c3.543 0 3.967.014 5.368.072 1.337.054 2.071.29 2.562.483.64.25 1.094.553 1.576.997.482.444.785.898 1.035 1.538.193.491.429 1.225.483 2.562.058 1.401.072 1.825.072 5.368s-.014 3.967-.072 5.368c-.054 1.337-.29 2.071-.483 2.562-.25.64-.553 1.094-.997 1.576-.444.482-.898.785-1.538 1.035-.491.193-1.225.429-2.562.483-1.401.058-1.825.072-5.368.072s-3.967-.014-5.368-.072c-1.337-.054-2.071-.29-2.562-.483-.64-.25-1.094-.553-1.576-.997-.482-.444-.785-.898-1.035-1.538-.193-.491-.429-1.225-.483-2.562C2.175 15.984 2.16 15.56 2.16 12.017s.015-3.967.072-5.368c.054-1.337.29-2.071.483-2.562.25-.64.553-1.094.997-1.576.444-.482.898-.785 1.538-1.035.491-.193 1.225-.429 2.562-.483 1.401-.058 1.825-.072 5.368-.072zm0 3.703a6.314 6.314 0 100 12.628 6.314 6.314 0 000-12.628zM12.017 16.114a4.097 4.097 0 110-8.194 4.097 4.097 0 010 8.194zm6.58-10.825a1.48 1.48 0 11-2.96 0 1.48 1.48 0 012.96 0z" clipRule="evenodd"/>
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
                <img
                  src="/LOGOS/ELIZABETHS_CLEANING_SERVICE_ORIGINAL_(%20EN%20BLANCO%20).png"
                  alt="Elizabeth's Cleaning Service"
                  className="h-14 w-auto sm:h-18 max-w-72"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-xl font-bold text-blue-500">
                  Elizabeth's Cleaning
                </span>
              )}
            </Link>
            <p className="text-gray-300 mb-4">
              Relax — we'll handle the cleaning.
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
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-300 text-sm">
            © {currentYear} Elizabeth's Cleaning Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}