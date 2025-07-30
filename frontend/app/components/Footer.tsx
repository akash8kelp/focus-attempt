import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#142420] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kelp Logo and Social */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/">
              <Image src="/assets/pulse-logo-231.png" alt="Kelp Pulse Logo" width={120} height={48} />
            </Link>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/our-firm" className="text-gray-300 hover:text-white">Our Firm</Link></li>
                <li><Link href="/contact-us" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                <li><Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/deal-identification" className="text-gray-300 hover:text-white">Deal Identification</Link></li>
                <li><Link href="/deal-management" className="text-gray-300 hover:text-white">Deal Management</Link></li>
                <li><Link href="/value-creation" className="text-gray-300 hover:text-white">Value Creation</Link></li>
                <li><Link href="/enterprise-solution" className="text-gray-300 hover:text-white">Enterprise Solution</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Addresses */}
          <div className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com/company/kelpglobal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">London</h3>
              <p className="mt-2 text-gray-300">13 Hanover Square<br/>Mayfair, London<br/>W1S 1HN<br/>+44 (0)203 633 4855</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Mumbai</h3>
              <p className="mt-2 text-gray-300">601, Centre Point<br/>JB Nagar<br/>Andheri (E), 400059</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Full Value Technologies Pvt. Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 