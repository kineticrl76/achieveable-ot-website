import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/images/FINAL_AchieveAble-100px-300x233.png"
                alt="AchieveAble OT logo"
                width={56}
                height={44}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-violet-200 text-sm max-w-xs">
              Where Kids Become Achievers! Pediatric occupational therapy serving Queens and Western Nassau.
            </p>
            <div className="mt-4 space-y-1 text-sm text-violet-200">
              <p>42-23 Francis Lewis Blvd, Ste LL107</p>
              <p>Bayside, NY 11361</p>
              <p className="mt-2">
                <a href="tel:7183571620" className="hover:text-amber-400 transition-colors">
                  (718) 357-1620
                </a>
              </p>
              <p>
                <a href="mailto:admin@achieveableot.com" className="hover:text-amber-400 transition-colors">
                  admin@achieveableot.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-amber-400 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-violet-200">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/teletherapy', label: 'Teletherapy' },
                { href: '/programs', label: 'Programs' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-amber-400 mb-3">Get Started</h3>
            <p className="text-sm text-violet-200 mb-4">
              Ready to help your child thrive? Book a session online in minutes.
            </p>
            <Link
              href="/book"
              className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm rounded-full transition-colors"
            >
              Book a Session
            </Link>
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">We Accept</h4>
              <p className="text-xs text-violet-200">Private Pay · Out-of-Network Benefits · DOE Authorization</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-violet-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-violet-400">
          <p>&copy; {new Date().getFullYear()} AchieveAble OT. All rights reserved.</p>
          <p>Fax: (718) 357-1623 &bull; (718) 799-5520</p>
        </div>
      </div>
    </footer>
  );
}
