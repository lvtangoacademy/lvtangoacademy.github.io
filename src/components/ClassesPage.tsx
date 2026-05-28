import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, HeartPulse, Sparkles, Send, MapPin, Radio, Calendar, Flame, Check } from 'lucide-react';
import { Tab, IMAGES } from '../types';

interface ClassesPageProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: (initialClass?: string) => void;
}

export default function ClassesPage({ setCurrentTab, onOpenBooking }: ClassesPageProps) {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 2000);
  };

  return (
    <div className="space-y-24 pb-20 animate-fade-in">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Absolute Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={IMAGES.heroSilhouette} 
            alt="Dramatic low light tango dancers silhouettes" 
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-75 scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Contents */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold bg-gold-950/40 border border-gold-500/20 px-4 py-1.5 rounded-full inline-block">
              LV Tango Academy
            </span>
            <p className="text-zinc-400 text-sm sm:text-base uppercase tracking-widest font-sans font-medium">
              The Art of the Embrace
            </p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl sm:text-7xl font-serif font-black tracking-tight text-white uppercase leading-none"
          >
            Master the Nocturne
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Argentine Tango is not just choreography; it is a complex conversation of weight transfer, balance, and silent intention. Learn the true language.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenBooking('Foundations of the Embrace - Monday')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 rounded-lg font-display font-bold uppercase tracking-wider text-xs transition-all shadow-xl hover:shadow-gold-500/20 cursor-pointer"
            >
              Start National Academy
            </button>
            <button
              onClick={() => setCurrentTab('schedule')}
              className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 text-zinc-200 border border-zinc-700/60 rounded-lg font-display font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              View Schedule
            </button>
          </motion.div>
        </div>

        {/* Edge gradient cover */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0c0e] to-transparent z-10 pointer-events-none" />
      </section>

      {/* 2. BENTO GRID: WHY THE ACADEMY? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-crimson-400">Distinction & Lineage</span>
          <h3 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">Why the Academy?</h3>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            We provide a sanctuary for traditional salon and modern stage tango, directed with relentless attention to biomechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bento Box 1 - Maestros */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 group h-[340px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent z-10" />
              <img 
                src={IMAGES.feetCloseUp} 
                alt="Tango movement biomechanics close-up feet" 
                className="w-full h-full object-cover object-center filter grayscale transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-20 p-6 space-y-2 mt-auto">
              <span className="text-[10px] font-mono uppercase bg-gold-950 text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded">Native Roots</span>
              <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide">Maestros from Buenos Aires</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Our founders lived and breathed the milongas of San Telmo and Villa Urquiza. Receive training forged directly in traditional salons.
              </p>
            </div>
          </div>

          {/* Bento Box 2 - Red Velvet Atmospheric Studio */}
          <div className="md:col-span-1 border border-zinc-900 bg-gradient-to-b from-crimson-950/60 to-crimson-900/40 relative overflow-hidden rounded-2xl group flex flex-col justify-between p-6 h-[340px] crimson-glow">
            <div className="absolute right-[-40px] top-[-40px] w-48 h-48 rounded-full bg-crimson-600/10 filter blur-2xl pointer-events-none" />
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-crimson-900/40 border border-crimson-500/20 text-crimson-400">
              <Flame size={22} className="animate-pulse" />
            </div>
            <div className="space-y-3 mt-12">
              <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Atmospheric Studio</h4>
              <p className="text-xs text-zinc-200 leading-relaxed font-light">
                Premium red velvet acoustics, modular professional shock-absorbent golden oak floors, and amber low-light aesthetics for total concentration.
              </p>
            </div>
            <span className="text-[9px] font-mono text-crimson-400 uppercase tracking-widest mt-2 block">MILANO, ITALY</span>
          </div>

          {/* Bento Box 3 - Private Guild */}
          <div className="md:col-span-1 border border-zinc-900 bg-zinc-950 p-6 flex flex-col justify-between rounded-2xl h-[340px] hover:border-zinc-800 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-zinc-900 border border-zinc-800 text-gold-400">
                <ShieldCheck size={20} />
              </div>
              <span className="text-[10px] font-mono text-gold-400 border border-gold-500/30 px-2 py-0.5 rounded">Exclusive</span>
            </div>
            <div className="space-y-2 mt-auto">
              <h4 className="font-serif text-lg font-bold text-white uppercase">Private Community</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                We maintain an intimate environment. Students get invitations to our private underground milongas where modern etiquette and retro vibes merge.
              </p>
              <div className="flex items-center space-x-1.5 pt-1 text-[11px] font-mono text-zinc-500">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span>350+ Active Members</span>
              </div>
            </div>
          </div>

          {/* Bento Box 4 - Heritage & Modernity */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 group h-[280px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/70 to-transparent z-10" />
              <img 
                src={IMAGES.vintageCamera} 
                alt="Vintage camera represents tango heritage" 
                className="w-full h-full object-cover object-center filter grayscale transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-20 p-6 space-y-2 mt-auto">
              <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded">The Balance</span>
              <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide">Heritage & Modernity</h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Tango's Golden Age taught us the depth of connection, while modern kinesiology taught us how to protect your spine. We bridge both beautifully.
              </p>
            </div>
          </div>

          {/* Bento Box 5 - Location & Access */}
          <div className="md:col-span-2 border border-zinc-900 bg-zinc-950 hover:border-zinc-800 transition-all p-6 rounded-2xl h-[280px] flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Accessible Hub</span>
              <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide">Historic Milano Center</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Located near Porta Venezia / Viale Campania. Accessible by multiple transit routes, with convenient parking arranged for late-night dancers.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-2 border border-zinc-900 bg-zinc-950 rounded-lg">
                <div className="font-serif text-gold-400 text-sm font-bold">5 Mins</div>
                <div className="text-[9px] text-zinc-500 uppercase font-mono mt-0.5">S-Bahn station</div>
              </div>
              <div className="p-2 border border-zinc-900 bg-zinc-950 rounded-lg">
                <div className="font-serif text-gold-400 text-sm font-bold">Easy Access</div>
                <div className="text-[9px] text-zinc-500 uppercase font-mono mt-0.5">Private lot</div>
              </div>
              <div className="p-2 border border-zinc-900 bg-zinc-950 rounded-lg">
                <div className="font-serif text-gold-400 text-sm font-bold">Safe Zone</div>
                <div className="text-[9px] text-zinc-500 uppercase font-mono mt-0.5">Secured building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CURRICULUM */}
      <section className="bg-gradient-to-b from-[#0e0e11] via-[#0c0c0e] to-[#0d0d10] py-20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#c99c1c]">Structured Syllabus</span>
            <h3 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">The Academy Curriculum</h3>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Our training pathway is designed systematically to move you from foundational balance to improvisational freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Beginner Level */}
            <div className="border border-zinc-900 bg-black/40 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-800 transition-all flex flex-col relative group">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={IMAGES.classBeginner} 
                  alt="Beginner tango couple studying posture" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <span className="absolute top-4 left-4 bg-zinc-950 text-gold-400 border border-gold-400/20 text-[10px] font-mono px-2.5 py-1 rounded">
                  LEVEL: BEGINNER
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-bold text-white tracking-wide">The Gold Foundation</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Establish perfect verticality, parallel walking mechanics, weight-transfer indicators, and the initial study of physical navigation in the salon.
                  </p>
                  
                  {/* Performance meters */}
                  <div className="space-y-2 pt-2 text-[11px] font-mono">
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Embrace Intimacy</span>
                        <span className="text-gold-400">Soft / Comfortable</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full w-[45%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Complexity Grade</span>
                        <span className="text-gold-400">Low (Core Steps)</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full w-[30%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-900">
                  <div className="flex justify-between items-center text-xs text-zinc-500">
                    <span>Course Span: 6 Weeks</span>
                    <span>2 Lessons / Week</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Foundations of the Embrace - Monday')}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-gold-400 border border-zinc-800 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Select Level & trial
                  </button>
                </div>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="border border-zinc-900 bg-black/40 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-800 transition-all flex flex-col relative group">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={IMAGES.classIntrepid} 
                  alt="Intermediate class studying sacadas" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <span className="absolute top-4 left-4 bg-zinc-950 text-crimson-400 border border-crimson-400/20 text-[10px] font-mono px-2.5 py-1 rounded">
                  LEVEL: INTREPID
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-bold text-white tracking-wide">Complexity & Off-axis</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    Introduce circular pivot actions (giros), dynamic partner invasions (sacadas), low leg hooks (ganchos), and the syncopated rhythms of Tango Vals.
                  </p>
                  
                  {/* Performance meters */}
                  <div className="space-y-2 pt-2 text-[11px] font-mono">
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Embrace Intimacy</span>
                        <span className="text-crimson-400">Dynamic & Dense</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-crimson-500 rounded-full w-[75%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Complexity Grade</span>
                        <span className="text-crimson-400">Medium (Off-Axis Balance)</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-crimson-500 rounded-full w-[70%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-900">
                  <div className="flex justify-between items-center text-xs text-zinc-500">
                    <span>Course Span: Ongoing</span>
                    <span>3 Lessons / Week</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Advanced Giros & Sacadas - Tuesday')}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-crimson-400 border border-zinc-800 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Select Level & trial
                  </button>
                </div>
              </div>
            </div>

            {/* Master Level */}
            <div className="border border-zinc-900 bg-black/40 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-800 transition-all flex flex-col relative group">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={IMAGES.classMaster} 
                  alt="Performance class showing tango lines" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                <span className="absolute top-4 left-4 bg-zinc-950 text-gold-500 border border-gold-500/20 text-[10px] font-mono px-2.5 py-1 rounded">
                  LEVEL: MASTER CLASS
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-bold text-white tracking-wide">Stage & Milonga Mayor</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    For high-level performers and professionals. Detailed refinement of high aerial legs (boleos), performance speed accents (traspié), and choreography.
                  </p>
                  
                  {/* Performance meters */}
                  <div className="space-y-2 pt-2 text-[11px] font-mono">
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Embrace Intimacy</span>
                        <span className="text-yellow-500">Highly Specialized</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-zinc-400 mb-1">
                        <span>Complexity Grade</span>
                        <span className="text-yellow-500">Extreme (High Aerials)</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-500 rounded-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-900">
                  <div className="flex justify-between items-center text-xs text-zinc-500">
                    <span>Course Span: Directorial</span>
                    <span>1:1 Mentorship</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking('Private Booking Inquiry')}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-gold-500 border border-zinc-800 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Select Level & trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE QUOTE / TESTIMONIAL SECTION */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="luxury-glass border border-zinc-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border border-gold-500/20 shadow-md">
              <img 
                src={IMAGES.testimonialAuthor} 
                alt="Elena Valmont Portrait" 
                className="w-full h-full object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase bg-gold-950/40 text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded">
                Studio Testimonial
              </span>
              <p className="font-serif italic text-lg sm:text-2xl text-zinc-200 leading-normal">
                "Finding LV Tango Academy transformed how I connect with others. They don't just teach steps; they teach posture, subtle connection, and deep alignment. It's the highest level of instruction outside Argentina."
              </p>
              <div>
                <h5 className="font-sans text-sm font-semibold text-white">Elena Valmont</h5>
                <p className="text-xs text-zinc-500 font-mono">Milonga Student — Since 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER & STUDIO ENTRANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Newsletter Inquire Form */}
        <div className="border border-zinc-900 bg-zinc-950 p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">The Circle of Intent</span>
            <h4 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white uppercase">Enter the LV Tango</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              We send monthly newsletters regarding private masterclass announcements, underground salon directions, and traditional tango biomechanic articles. No marketing spam.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Secure your entry email..." 
                className="flex-1 bg-zinc-900 border border-zinc-850 px-4 py-3 text-sm text-white rounded-lg placeholder-zinc-500 focus:outline-none focus:border-gold-500 transition-colors"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="bg-gold-600 hover:bg-gold-500 text-zinc-950 px-5 rounded-lg text-xs font-bold uppercase tracking-wider font-display shrink-0 flex items-center justify-center space-x-1.5 transition-all"
                id="newsletter-submit-btn"
              >
                <span>Subscribe</span>
                <Send size={12} />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 bg-zinc-900/60 border border-gold-500/25 text-gold-400 text-xs font-medium rounded-lg flex items-center space-x-2"
            >
              <Check size={14} className="text-gold-400" />
              <span>You have been added to the Inner Circle. check your inbox soon.</span>
            </motion.div>
          )}
        </div>

        {/* Visit details map link card */}
        <div className="border border-zinc-900 bg-zinc-950 p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-mono text-crimson-400 uppercase tracking-widest block font-bold">The Venue</span>
            <h4 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white uppercase">Visit the Studio</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We welcome walk-ins during Milonga evenings. Address: <span className="text-zinc-200">Viale Campania, 2B, Milano</span>. Stop in to see the venue, feel the wood floor, or enjoy a glass of Malbec.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-xs text-zinc-500 pt-3 border-t border-zinc-900">
            <MapPin size={16} className="text-crimson-500" />
            <span>Open Weekdays 18:00 - 23:00, Weekends 11:00 - 15:00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
