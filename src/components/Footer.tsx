import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Heart, Map } from 'lucide-react';
import { Tab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: () => void;
}

export default function Footer({ setCurrentTab, onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 select-none">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-gold-500/30 bg-black/40 text-gold-400 font-serif font-bold text-sm">
                LV
              </div>
              <div>
                <h4 className="font-serif text-base tracking-wider font-extrabold text-white leading-tight uppercase">
                  Nocturne
                </h4>
                <p className="font-sans text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">TANGO ACADEMY</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We teach tango not merely as a dance of performance, but as a discipline of somatic empathy, intense listening, and geometric clarity.
            </p>
            <div className="flex space-x-4 pt-1">
              <a href="#instagram" className="text-zinc-600 hover:text-gold-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#facebook" className="text-zinc-600 hover:text-gold-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#youtube" className="text-zinc-600 hover:text-gold-400 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-serif text-sm font-semibold tracking-wide text-zinc-200 uppercase mb-4">Navigations</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setCurrentTab('classes')} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Classes & Curriculum
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('instructors')} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Maestros de Milonga
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('schedule')} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Weekly Program
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentTab('contact')} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-serif text-sm font-semibold tracking-wide text-zinc-200 uppercase mb-4">The Studio</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="text-zinc-500">
                  Viale Campania 2B, <br />
                  Milano, MI 20133, Italy
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-zinc-600" />
                <span className="text-zinc-500">+39 342 988 5642</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-zinc-600" />
                <span className="text-zinc-500">studio@nocturne-tango.com</span>
              </li>
            </ul>
          </div>

          {/* Opening state indicator */}
          <div>
            <h5 className="font-serif text-sm font-semibold tracking-wide text-zinc-200 uppercase mb-4">Milonga Program</h5>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
              Open Daily from 17:00 to 23:30. Every Friday and Sunday, we host the midnight salon from 21:00 until late.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-gold-400 border border-zinc-800 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition-colors select-none"
            >
              <span>Instant trial booking</span>
            </button>
          </div>
        </div>

        {/* Legal Credits */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {currentYear} Nocturne Tango Academy. All rights reserved.</p>
          <p className="flex items-center">
            <span>Preserving precision in movement & connection</span>
            <Heart size={12} className="text-crimson-600 ml-1.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}
