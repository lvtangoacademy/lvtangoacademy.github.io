import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, Sparkles, Filter, ChevronRight, Bookmark, ShieldAlert, Award, Footprints } from 'lucide-react';
import { Tab, ClassItem, IMAGES } from '../types';

interface SchedulePageProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: (initialClass?: string) => void;
}

export default function SchedulePage({ setCurrentTab, onOpenBooking }: SchedulePageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'beginner' | 'intermediate' | 'master'>('all');

  const classes: ClassItem[] = [
    {
      id: 'mon-foundations',
      title: 'Foundations of the Embrace',
      time: '19:30 - 20:45',
      day: 'Monday',
      level: 'beginner',
      category: 'Technique & Balance',
      instructor: 'Valentin Russo',
      description: 'Establish vertical posture, center-gravity calibration, linear walking, and absolute navigation laws in a packed milonga.',
      intensity: 2
    },
    {
      id: 'mon-circular',
      title: 'Circular Movements & Ochis',
      time: '21:00 - 22:15',
      day: 'Monday',
      level: 'intermediate',
      category: 'Figures & Pivots',
      instructor: 'Elena Moretti',
      description: 'Study pivot geometries, correct chest-leads, disassociation drills, forward and backward ochos with exact rhythm matches.',
      intensity: 3
    },
    {
      id: 'tue-giros',
      title: 'Advanced Giros & Sacadas',
      time: '20:00 - 21:30',
      day: 'Tuesday',
      level: 'intermediate',
      category: 'Space Intrusion',
      instructor: 'Valentin & Elena',
      description: 'Step into partners boundaries safely. Understand rotational integrity, lead pivots, forward/back sacadas in linear slots.',
      intensity: 4
    },
    {
      id: 'wed-vals',
      title: 'Tango Vals Rhythm',
      time: '19:00 - 20:15',
      day: 'Wednesday',
      level: 'master',
      category: 'Musical Rhythm',
      instructor: 'Julian & Sofia',
      description: 'Master the triple-meter cadence, continuous turns, double-time syncopation, and lyrical accentuation of legendary orchestras.',
      intensity: 4
    },
    {
      id: 'wed-practica',
      title: 'Guided Práctica Libre',
      time: '20:30 - 22:30',
      day: 'Wednesday',
      level: 'all',
      category: 'Independent practice',
      instructor: 'Valentin Russo',
      description: 'Informal studio space to practice your drills, clarify structural questions, ask for direct feedback, and socialize with friends.',
      intensity: 1
    },
    {
      id: 'thu-milonga',
      title: 'Milonga Lisa & Traspié',
      time: '20:00 - 21:15',
      day: 'Thursday',
      level: 'intermediate',
      category: 'Milonga Tempo',
      instructor: 'Elena Moretti',
      description: 'Refine rapid footwork and rhythmic syncopations for the fast Milonga. Play with tempo speed and double acceleration step accents.',
      intensity: 4
    },
    {
      id: 'fri-technique',
      title: 'Beginner Technique',
      time: '18:30 - 19:45',
      day: 'Friday',
      level: 'beginner',
      category: 'Individual Alignment',
      instructor: 'Valentin Russo',
      description: 'Master stability, solo foot pivots, somatic breathing work, and foot aesthetics. No partner required.',
      intensity: 2
    },
    {
      id: 'fri-noche',
      title: 'Noche de Milonga (Milonga Nocturna)',
      time: '20:30 - Midnight',
      day: 'Friday Host',
      level: 'all',
      category: 'Social Milonga',
      instructor: 'Traditional DJs',
      description: 'The studio turns into an warm-amber dim salon. Dance, sip Malbec, and enjoy traditional tanda and cortina arrangements.',
      intensity: 2
    },
    {
      id: 'sat-intensive',
      title: 'Technique Intensive Workshop',
      time: '11:00 - 14:00',
      day: 'Saturday Event',
      level: 'intermediate',
      category: 'Deep-dive Bootcamp',
      instructor: 'Visiting Maestros',
      description: 'A 3-hour intensive deep dive into advanced pivot kinesis, dynamic gravity manipulation, and high boleos execution.',
      intensity: 5
    }
  ];

  const filteredClasses = activeFilter === 'all' 
    ? classes 
    : classes.filter(cls => cls.level === activeFilter || cls.level === 'all');

  const filterButtons = [
    { key: 'all', label: 'All Activities' },
    { key: 'beginner', label: 'Beginner (Gold)' },
    { key: 'intermediate', label: 'Intermediate' },
    { key: 'master', label: 'Master Class' },
  ] as const;

  return (
    <div className="space-y-20 pb-20 animate-fade-in">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-[#de3b4b] font-bold">The Weekly Program</span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">Milonga Nocturna</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Our scheduling calendar values structural continuity. Filter classes by experience level, review the biomechanical categories, and discover our iconic Friday milonga.
        </p>
      </section>

      {/* FILTER BUTTONS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-6 border-b border-zinc-900">
          <span className="text-xs font-mono uppercase text-zinc-500 mr-2 flex items-center space-x-1">
            <Filter size={14} />
            <span>Filter level:</span>
          </span>
          {filterButtons.map((btn) => {
            const isSelected = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                onClick={() => setActiveFilter(btn.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider font-display transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 shadow-md font-bold' 
                    : 'bg-zinc-900/65 text-zinc-400 border border-zinc-850 hover:bg-zinc-800'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* SCHEDULE CARD GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((cls) => {
              // Custom badge color
              let levelBadge = 'bg-zinc-900 border-zinc-800 text-zinc-400';
              if (cls.level === 'beginner') levelBadge = 'bg-gold-950/40 border-gold-500/20 text-gold-400';
              else if (cls.level === 'intermediate') levelBadge = 'bg-crimson-950/40 border-crimson-500/20 text-crimson-400';
              else if (cls.level === 'master') levelBadge = 'bg-blue-950/30 border-blue-500/20 text-blue-400';

              return (
                <motion.div
                  key={cls.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex flex-col justify-between border border-zinc-900 bg-zinc-950/70 rounded-xl overflow-hidden p-6 hover:border-zinc-800 transition-colors"
                >
                  <div className="space-y-4">
                    {/* Header: Day & Badges */}
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-mono uppercase bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded-md font-bold">
                        {cls.day}
                      </span>
                      <span className={`text-[10px] font-mono uppercase border px-2 py-0.5 rounded-md ${levelBadge}`}>
                        {cls.level}
                      </span>
                    </div>

                    {/* Class Title */}
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
                        {cls.title}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{cls.category}</p>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs leading-relaxed font-light line-clamp-3">
                      {cls.description}
                    </p>

                    {/* Time & Teacher row */}
                    <div className="flex flex-col space-y-2 pt-3 border-t border-zinc-900 text-xs text-zinc-400">
                      <div className="flex items-center space-x-2">
                        <Clock size={14} className="text-zinc-500" />
                        <span className="font-mono">{cls.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-zinc-500" />
                        <span>Director: <span className="text-zinc-300 font-medium">{cls.instructor}</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="pt-6 mt-4 flex items-center justify-between border-t border-zinc-900/60">
                    <div className="flex items-center space-x-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">Intensity:</span>
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full ${i < cls.intensity ? 'bg-gold-500' : 'bg-zinc-800'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBooking(cls.title)}
                      className="inline-flex items-center justify-center text-xs font-mono font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase cursor-pointer"
                    >
                      <span>Book Trial</span>
                      <ChevronRight size={14} className="ml-0.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER INTENSITY INFO PANEL */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-6 border border-zinc-900 bg-zinc-950 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 text-gold-500 border border-zinc-800 shrink-0">
              <Footprints size={24} />
            </div>
            <div>
              <h5 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Precision is our Language</h5>
              <p className="text-xs text-zinc-400 max-w-sm">No partner is ever required. Wear smooth leather or hard-plastic-soled shoes to allow smooth pivot rotation.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentTab('contact')}
              className="px-4 py-2 border border-zinc-800 rounded-lg hover:bg-zinc-900 text-xs font-semibold text-zinc-300 uppercase transition-colors"
            >
              Ask Questions
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 rounded-lg text-xs font-semibold uppercase transition-colors"
            >
              Reserve spot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
