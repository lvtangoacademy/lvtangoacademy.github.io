import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldAlert, Heart, Compass, MessageSquare, ChevronRight, Sparkles, UserCheck } from 'lucide-react';
import { Tab, IMAGES, Instructor } from '../types';

interface InstructorsPageProps {
  setCurrentTab: (tab: Tab) => void;
  onOpenBooking: (initialClass?: string) => void;
}

export default function InstructorsPage({ setCurrentTab, onOpenBooking }: InstructorsPageProps) {
  const instructors: Instructor[] = [
    {
      id: 'valentin',
      name: 'Valentin Russo',
      role: 'Lead Director & Master of Movement',
      imageUrl: IMAGES.instructorValentin,
      specialties: ['Tango de Salón', 'Complex Biomechanics', 'Milonga Lisa & Traspié'],
      philosophy: 'Tango is configured as a fluid architectural grid. The embrace is only true when skeletal structures align and weights flow as one body.',
      bio: 'Born in Buenos Aires, Valentin spent 15 years dancing in classic milongas of Villa Urquiza. He studied under direct disciples of Osvaldo Pugliese, refining a syntax of weight transfer, mechanical precision, and profound speed control.'
    },
    {
      id: 'elena',
      name: 'Elena Moretti',
      role: 'Co-Director & Principal Follower Technique',
      imageUrl: IMAGES.instructorElena,
      specialties: ['Somatic Control', 'Ganchos & Boleos Refinement', 'Closed Milonguero Style'],
      philosophy: 'The follower is never a passive ornament. She is the active reactor, translating tension, steering gravity, and amplifying shared torque.',
      bio: 'Elena is a former classical ballerina who discovered Argentine Tango in Naples. Combining modern kinesiology with tango tradition, she has pioneered somatic training methods that prevent injury and optimize rotation.'
    },
    {
      id: 'julian-sofia',
      name: 'Julian & Sofia',
      role: 'Regular Guest Artists (Buenos Aires)',
      imageUrl: IMAGES.instructorsJulianSofia,
      specialties: ['Stage Performance', 'Centrifugal Out-of-Axis', 'Vintage Musicality'],
      philosophy: 'We explore the thin boundary where physical constraints dissolve into lyrical drama. Speed must never sacrifice connection.',
      bio: 'Julian & Sofia are world-renowned stage performers. Famous for their explosive aerial work and rapid-fire footwork, they visit our Milano studio quarterly to run high-intensity masterclasses.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 animate-fade-in">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-gold-400">The Masters of Movement</span>
        <h2 className="font-serif text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">Maestros de Milonga</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Each leader and follower represents decades of dedicated study, direct Argentine lineages, and a deep scientific appreciation of balletic and rotational dynamics.
        </p>
      </section>

      {/* MAESTROS GRID LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {instructors.map((instructor, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={instructor.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Profile Image container with gorgeous frames */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-[-4px] bg-gradient-to-r from-crimson-600 via-gold-500 to-crimson-900 rounded-2xl opacity-10 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Image card structure */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-900 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-zinc-950">
                  <img 
                    src={instructor.imageUrl} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover filter grayscale contrast-110 md:group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent z-10" />
                </div>
              </div>

              {/* Bio & Details container */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-semibold">{instructor.role}</span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">{instructor.name}</h3>
                </div>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((spec) => (
                    <span 
                      key={spec} 
                      className="text-[10px] font-mono uppercase bg-zinc-900/60 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Biography */}
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {instructor.bio}
                </p>

                {/* Personal Philosophy Quote Block */}
                <div className="border-l-2 border-gold-500 pl-4 py-1 italic bg-gold-950/5 rounded-r-lg">
                  <h5 className="text-[10px] font-mono text-gold-400 uppercase tracking-widest not-italic mb-1">Director Biography</h5>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    "{instructor.philosophy}"
                  </p>
                </div>

                {/* Inscription interaction */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => onOpenBooking('Private Booking Inquiry')}
                    className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-zinc-950 rounded-lg text-xs font-bold uppercase tracking-wider font-display transition-colors cursor-pointer text-center"
                  >
                    Regret 1:1 lessons
                  </button>
                  <button
                    onClick={() => setCurrentTab('schedule')}
                    className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-850 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer font-sans"
                  >
                    View Group Schedule
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* MID-PAGE PHILOSOPHY PROSE */}
      <section className="bg-zinc-950 py-16 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-mono text-crimson-400 tracking-widest uppercase">The Essence of Nocturne</span>
          <h3 className="font-serif text-2xl sm:text-4xl font-medium text-white tracking-tight uppercase">"Tango is the study of physical honesty"</h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Our instructional standards discard vanity patterns. Every movement we teach can be executed in a packed milonga room, relying on sensory awareness, balance alignment, and deep mutual respect rather than pre-planned theatrical display.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-500">
            <Sparkles size={16} />
            <span className="text-[10px] uppercase font-mono tracking-widest">Pure Salon Philosophy</span>
          </div>
        </div>
      </section>

      {/* CORE CALLOUT: BEGIN JOURNEY */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="luxury-glass border border-zinc-900 rounded-3xl p-8 sm:p-12 space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">Begin Your Journey With The Masters</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Whether you are walking into your first class or refining advanced choreographic elements for international stage evaluations, seek direction from those who live the codes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Private Booking Inquiry')}
              className="w-full sm:w-auto px-6 py-3 bg-gold-600 hover:bg-gold-500 text-zinc-950 font-display font-semibold uppercase tracking-wider text-xs rounded-lg transition-all"
            >
              Book Private Lesson
            </button>
            <button
              onClick={() => setCurrentTab('schedule')}
              className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800 font-sans text-xs uppercase tracking-wider rounded-lg transition-all"
            >
              View Group Classes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
