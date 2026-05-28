import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Heart, Compass, Menu, X, Landmark, Quote } from 'lucide-react';
import { Tab } from '../types';

interface HeaderProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: () => void;
}

export default function Header({ currentTab, setCurrentTab, onOpenBooking }: HeaderProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const navItems = [
    { key: 'classes', label: 'Classes & Path' },
    { key: 'instructors', label: 'Maestros' },
    { key: 'schedule', label: 'Weekly Milonga' },
    { key: 'contact', label: 'Contact & FAQ' },
  ] as const;

  return (
    <>
      <header className="sticky top-0 z-40 w-full luxury-glass border-b border-zinc-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <div 
              onClick={() => setCurrentTab('classes')}
              className="flex items-center space-x-3 cursor-pointer group select-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-gold-500/30 bg-black/40 text-gold-400 font-serif font-bold text-lg overflow-hidden group-hover:border-crimson-600/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-crimson-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 transition-transform group-hover:scale-105 duration-300">LV</span>
              </div>
              <div>
                <h1 className="font-serif text-lg tracking-wider font-extrabold text-white leading-tight uppercase group-hover:text-gold-400 transition-colors">
                  Nocturne
                </h1>
                <p className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">TANGO ACADEMY</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setCurrentTab(item.key)}
                    className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 select-none cursor-pointer"
                  >
                    <span className={`${isActive ? 'text-gold-400' : 'text-zinc-400 hover:text-zinc-100'}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSubNavGlow"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-crimson-600 via-gold-400 to-crimson-500 rounded-full"
                        style={{ originY: '0px' }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Book Trial / Contact Trigger */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-gold-400 border border-gold-500/20 px-5  h-10 text-xs font-semibold uppercase tracking-widest rounded-lg transition-all shadow-md select-none cursor-pointer active:scale-98"
                id="book-trial-header-btn"
              >
                Inscribe of trial
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpenMobile(!isOpenMobile)}
                className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-900"
                id="mobile-nav-toggle"
              >
                {isOpenMobile ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpenMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-zinc-900 bg-[#0c0c0e]/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => {
                    const isActive = currentTab === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => {
                          setCurrentTab(item.key);
                          setIsOpenMobile(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive 
                            ? 'bg-zinc-950 text-gold-400 border-l-2 border-gold-500' 
                            : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
                
                <div className="pt-3 border-t border-zinc-900">
                  <button
                    onClick={() => {
                      onOpenBooking();
                      setIsOpenMobile(false);
                    }}
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 px-5 py-3 text-sm font-semibold uppercase tracking-widest rounded-lg transition-all"
                  >
                    Book A Trial Lesson
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
