'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/teletherapy', label: 'Teletherapy' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://www.achieveableot.com/wp-content/uploads/2021/02/FINAL_AchieveAble-100px-300x233.png"
              alt="AchieveAble OT logo"
              width={120}
              height={93}
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-violet-700 bg-violet-50'
                    : 'text-gray-600 hover:text-violet-700 hover:bg-violet-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              className="ml-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-violet-700 hover:bg-violet-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-violet-700 bg-violet-50'
                  : 'text-gray-600 hover:text-violet-700 hover:bg-violet-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 mt-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-full text-center transition-colors"
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
