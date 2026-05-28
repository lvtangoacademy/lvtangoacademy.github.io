import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, Phone, ChevronRight, Award, Star, CheckCircle, Flame } from 'lucide-react';
import { IMAGES } from '../types';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClassTitle?: string;
}

export default function TrialBookingModal({ isOpen, onClose, initialClassTitle = '' }: TrialBookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('beginner');
  const [selectedClass, setSelectedClass] = useState(initialClassTitle || 'Foundations of the Embrace - Monday');
  const [hasPartner, setHasPartner] = useState('no');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Update selected class if visual initial prop changes
  React.useEffect(() => {
    if (initialClassTitle) {
      setSelectedClass(initialClassTitle);
    }
  }, [initialClassTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    
    // Simulate luxury API booking response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomTicket = 'NLC-' + Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(randomTicket);
    }, 1300);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setExperience('beginner');
    setNotes('');
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal box */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-800 bg-[#0f0f12] text-zinc-100 shadow-2xl"
        >
          {/* Header design bar with crimson highlight */}
          <div className="h-1.5 w-full bg-gradient-to-r from-crimson-600 via-gold-500 to-crimson-900" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-zinc-800"
            id="close-booking-modal"
          >
            <X size={20} />
          </button>

          {!isSuccess ? (
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-widest text-gold-400">LV Tango Experience</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white mt-1">Book Your Trial</h3>
                <p className="text-zinc-400 text-sm mt-1">Join us in the study of intimacy, musicality, and technique.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 text-zinc-500" size={17} />
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Elena Moretti" 
                        className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 text-zinc-500" size={17} />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@tango.com" 
                        className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Phone Number (Optional)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 text-zinc-500" size={17} />
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+39 345 6789" 
                        className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Level select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Tango Level</label>
                    <select 
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-all"
                    >
                      <option value="beginner">Beginner (The Foundation)</option>
                      <option value="intermediate">Intermediate (Ganchos & Sacadas)</option>
                      <option value="master">Master Class (Stage & Performance)</option>
                      <option value="curious">First Time Ever (Just Curious)</option>
                    </select>
                  </div>
                </div>

                {/* Class options */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Select Session Interest</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-all"
                  >
                    <option value="Foundations of the Embrace - Monday">Foundations of the Embrace & Walking (Mon 19:30)</option>
                    <option value="Circular Movements - Monday">Circular Movements & Ochis (Mon 21:00)</option>
                    <option value="Advanced Giros & Sacadas - Tuesday">Advanced Giros & Sacadas (Tue 20:00)</option>
                    <option value="Tango Vals Rhythm - Wednesday">Tango Vals Rhythm & Cadence (Wed 19:00)</option>
                    <option value="Milonga Lisa & Traspié - Thursday">Milonga Lisa & Traspié (Thu 20:00)</option>
                    <option value="Beginner Technique - Friday">Beginner Technique & Posture (Fri 18:30)</option>
                    <option value="Golden Age Milonga - Friday Night">Friday Noche de Milonga (Fri 20:30)</option>
                    <option value="Technique Intensive - Saturday">Technique Intensive Workshop (Sat 11:00)</option>
                    <option value="Private Booking Inquiry">Private 1-on-1 Lesson with Valentin/Elena</option>
                  </select>
                </div>

                {/* Partner status question */}
                <div className="space-y-2 pt-1 border-t border-zinc-900">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Do you have a partner?</span>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2.5 cursor-pointer text-sm font-medium">
                      <input 
                        type="radio" 
                        name="partner" 
                        value="yes"
                        checked={hasPartner === 'yes'}
                        onChange={() => setHasPartner('yes')}
                        className="accent-gold-500 w-4 h-4 bg-zinc-900 border-zinc-800"
                      />
                      <span>Yes, signing up as a couple</span>
                    </label>
                    <label className="flex items-center space-x-2.5 cursor-pointer text-sm font-medium">
                      <input 
                        type="radio" 
                        name="partner" 
                        value="no"
                        checked={hasPartner === 'no'}
                        onChange={() => setHasPartner('no')}
                        className="accent-gold-500 w-4 h-4 bg-zinc-900 border-zinc-800"
                      />
                      <span>No, I am attending solo</span>
                    </label>
                  </div>
                  <p className="text-xs text-zinc-500 italic mt-1">Note: Partner is never required in Tango. We rotate during classes so everyone dances!</p>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Experience Details / Goals (Optional)</label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Tell us about preceding dance experience or specific tango goals..." 
                    className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                  />
                </div>

                {/* Term text & Button */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs text-zinc-500">
                  <p>By registering, you agree to traditional respect rules of the milonga.</p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-zinc-950 px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-gold-500/10 transition-all font-display select-none disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Inscribing...' : 'Complete Reservation'}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* SUCCESS TICKET SCREEN */
            <div className="p-6 sm:p-10 text-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-950 border border-gold-500/30 text-gold-400"
                >
                  <CheckCircle size={32} />
                </motion.div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400">Reservation Confirmed</span>
                  <h4 className="font-serif text-3xl font-bold tracking-tight text-white">Welcome to the Milonga</h4>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto">
                    Your trial pass for <span className="text-gold-300 font-medium">"{selectedClass}"</span> has been generated successfully.
                  </p>
                </div>

                {/* Visual Golden Ticket */}
                <motion.div 
                  initial={{ rotate: -1, y: 10, opacity: 0 }}
                  animate={{ rotate: 1, y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mx-auto max-w-sm border border-gold-500/40 bg-zinc-950/90 rounded-xl overflow-hidden shadow-2xl relative"
                >
                  {/* Ticket side notches */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2.5 w-5 h-5 bg-[#0f0f12] rounded-full border border-gold-500/40 z-20" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2.5 w-5 h-5 bg-[#0f0f12] rounded-full border border-gold-500/40 z-20" />

                  <div className="p-5 border-b border-dashed border-gold-500/20 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-gold-400">NOCTURNE TANGO PASSPORT</span>
                      <Award size={14} className="text-gold-500" />
                    </div>
                    <div className="mt-4">
                      <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Inscribed Guest</h5>
                      <p className="text-base font-serif font-semibold text-white tracking-wide mt-0.5">{fullName}</p>
                    </div>
                  </div>

                  <div className="p-5 text-left bg-zinc-900/50 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h6 className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Course</h6>
                        <p className="text-xs text-zinc-300 font-medium truncate mt-0.5">{selectedClass}</p>
                      </div>
                      <div>
                        <h6 className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Partner State</h6>
                        <p className="text-xs text-zinc-300 font-medium uppercase mt-0.5">{hasPartner === 'yes' ? 'Couple' : 'Soloist'}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h6 className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Location</h6>
                        <p className="text-xs text-zinc-300 mt-0.5">Viale Campania, 2B</p>
                      </div>
                      <div>
                        <h6 className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Entry Badge</h6>
                        <p className="text-xs text-gold-400 font-mono font-bold mt-0.5">{ticketNumber}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                  An email detailing directions and basic milonga etiquette has been sent to <span className="font-semibold text-zinc-400">{email}</span>. Bring comfortable leather or hard-soled shoes.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-zinc-900 hover:bg-zinc-800 text-gold-400 hover:text-gold-300 border border-zinc-800 rounded-lg text-sm font-medium transition-colors font-display"
                  >
                    Acknowledge & Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
