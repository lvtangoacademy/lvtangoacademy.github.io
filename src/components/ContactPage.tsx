import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Plus, Minus, Check, Map, Compass, ShieldAlert } from 'lucide-react';
import { Tab, FAQItem, IMAGES } from '../types';

interface ContactPageProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: (initialClass?: string) => void;
}

export default function ContactPage({ setCurrentTab, onOpenBooking }: ContactPageProps) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Beginner Fundamentals');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Expanded State
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Do I need a partner to join a class?',
      answer: "No, a partner is never required. In Argentine Tango culture, it is highly traditional to rotate partners constantly during the lesson. This helps you learn how to connect and talk with different weights and heights, speeding up your adaptation process dramatically."
    },
    {
      id: 'faq-2',
      question: 'What type of clothing and shoes should I wear?',
      answer: "Wear comfortable clothing that allows easy leg movements. For shoes, the sole is critical: choose leather, suede, or hard-plastic slick soles that allow you to pivot smoothly without sticking to our oak floor. Steer clear of rubber-sole athletic sneakers, as they can stress your knees during turns."
    },
    {
      id: 'faq-3',
      question: 'Can I start my courses or pathway at any time?',
      answer: "Absolutely. Our absolute Beginner Foundations operates on a rolling 6-week curriculum cycle, meaning you can jump in on any Monday or Friday. The teaching structure is designed to isolate technical components so you can catch up effortlessly."
    },
    {
      id: 'faq-4',
      question: 'Are private lessons better than group classes?',
      answer: "Private one-on-one lessons allow custom biomechanical analysis and instant correction, whereas group classes provide the necessary community exposure, navigation rules, and partner-variety experience. A combined approach of both is recommended for the fastest, most refined progress."
    }
  ];

  const handleFAQToggle = (id: string) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setUserName('');
      setUserEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="space-y-24 pb-20 animate-fade-in">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#c99c1c] font-bold">The Art of Connection</span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">Begin the Embrace.</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Have specialized questions on registration, partner matching, corporate studio rentals, or booking private maestro sessions? Submit an inquiry filter below.
        </p>
      </section>

      {/* FORM & ADDRESS SIDEBAR GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Grayscale moody dancer legs picture & Info bar */}
        <div className="space-y-8">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-900 aspect-[16/10] bg-zinc-950 sm:h-[260px]">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
            <img 
              src={IMAGES.contactDancers} 
              alt="Intimate tango embrace close-up footwork legs" 
              className="w-full h-full object-cover filter grayscale h-64 brightness-90 saturate-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-[10px] font-mono uppercase bg-black/60 text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded">
                The Intimacy of Technique
              </span>
            </div>
          </div>

          {/* Location details card */}
          <div className="luxury-glass border border-zinc-900 rounded-2xl p-6 space-y-6">
            <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">The Studio Coordinates</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="text-zinc-500 uppercase font-mono block tracking-wider">Address</span>
                <p className="text-zinc-300">
                  Viale Campania, 2B <br />
                  20133 Milano (MI)
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-zinc-500 uppercase font-mono block tracking-wider">Contact Details</span>
                <p className="text-zinc-300">
                  Telefono: +39 342 988 5642 <br />
                  Email: studio@nocturne-tango.com
                </p>
              </div>
            </div>

            {/* Stylized map integration */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-950 h-[150px] bg-zinc-950">
              <img 
                src={IMAGES.locationMap} 
                alt="Milan street map location indicator" 
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-70"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2.5 text-[10px] text-zinc-400 flex justify-between items-center">
                <span>Milano - Porta Venezia Area</span>
                <span className="text-gold-400 font-bold uppercase tracking-widest font-mono">View on maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic inquiry submission form */}
        <div className="border border-zinc-900 bg-zinc-950 p-8 sm:p-10 rounded-2xl space-y-6 relative">
          <div className="space-y-1">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block font-semibold">Message Desk</span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">Send an Inquiry</h4>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* User Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="E.g. Elena Moretti" 
                    className="w-full bg-zinc-900 border border-zinc-850 px-3.5 py-2 text-xs text-white rounded-lg placeholder-zinc-600 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* User Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="elena@tango.com" 
                    className="w-full bg-zinc-900 border border-zinc-850 px-3.5 py-2 text-xs text-white rounded-lg placeholder-zinc-600 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type Select */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Inquiry Category</label>
                <select 
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-850 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                >
                  <option value="Beginner Fundamentals">Beginner Foundations Syllabus</option>
                  <option value="Intermediate Technique">Intermediate Complex Rotations</option>
                  <option value="Private Coaching">Private 1-on-1 Maestro Coaching</option>
                  <option value="Studio Rentals & Events">Milan Studio Rentals & Event Space</option>
                </select>
              </div>

              {/* Message text */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Detailed message</label>
                <textarea 
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquire about custom packages, lesson times, or experience placements..." 
                  className="w-full bg-zinc-900 border border-zinc-850 px-3.5 py-2.5 text-xs text-white rounded-lg placeholder-zinc-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 rounded-lg text-xs font-bold uppercase tracking-widest font-display transition-all disabled:opacity-50 inline-flex items-center justify-center space-x-1.5 cursor-pointer"
                  id="submit-contact-form"
                >
                  <span>{isSubmitting ? 'Channeling message...' : 'Send Message'}</span>
                  <Send size={12} className="shrink-0" />
                </button>
              </div>
            </form>
          ) : (
            /* Contact success screen animation */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center space-y-4"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-950/50 border border-gold-500/25 text-gold-400">
                <Check size={24} />
              </div>
              <h5 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Inquiry cataloged</h5>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mx-auto">
                Thank you. Your request regarding <span className="text-gold-400 font-semibold">"{inquiryType}"</span> was received. Our local Milan registry team will respond within 12 hours.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-gold-400 text-xs rounded border border-zinc-800 transition-colors font-mono"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#de3b4b] block font-bold">Answers Refined</span>
          <h3 className="font-serif text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">Frequently Asked</h3>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            return (
              <div 
                key={faq.id}
                className="border border-zinc-900 bg-zinc-950/80 rounded-xl overflow-hidden shadow-sm transition-all hover:border-zinc-850"
              >
                <button
                  onClick={() => handleFAQToggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-zinc-100 hover:text-white transition-colors cursor-pointer select-none"
                >
                  <span className="font-serif text-sm sm:text-base font-bold tracking-wide">
                    {faq.question}
                  </span>
                  <span className="text-gold-400 shrink-0 ml-3">
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-zinc-900/40 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
