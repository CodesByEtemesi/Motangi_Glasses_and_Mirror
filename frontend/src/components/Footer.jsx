import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand / About */}
          <div>
            <img src={assets.logowhite_rbg} className="w-32 mb-4" alt="Motangi Glasses and Mirrors" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality mirrors, glass wall art, and cladding solutions — crafted for homes and spaces across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/collection" className="hover:text-white transition">Collection</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-4">Get In Touch</p>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm mb-4">
              <li>123 Main Street, Nairobi, Kenya</li>
              <li>info@motangi.com</li>
              <li>+254 700 000 000</li>
            </ul>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Motangi Glasses and Mirrors. All rights reserved.</p>
          <p className="text-gray-600 text-xs mt-2">
  Built by{' '}
            <a
              href="https://codesbyetemesi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              CodesByEtemesi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;