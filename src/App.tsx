import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ClassesPage from './components/ClassesPage';
import InstructorsPage from './components/InstructorsPage';
import SchedulePage from './components/SchedulePage';
import ContactPage from './components/ContactPage';
import TrialBookingModal from './components/TrialBookingModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('classes');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingClass, setInitialBookingClass] = useState('');

  const handleOpenBooking = (classTitle?: string) => {
    if (classTitle) {
      setInitialBookingClass(classTitle);
    } else {
      setInitialBookingClass('');
    }
    setIsBookingOpen(true);
  };

  const renderActiveTab = () => {
    switch (currentTab) {
      case 'classes':
        return (
          <ClassesPage 
            setCurrentTab={setCurrentTab} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'instructors':
        return (
          <InstructorsPage 
            setCurrentTab={setCurrentTab} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'schedule':
        return (
          <SchedulePage 
            setCurrentTab={setCurrentTab} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      case 'contact':
        return (
          <ContactPage 
            setCurrentTab={setCurrentTab} 
            onOpenBooking={handleOpenBooking} 
          />
        );
      default:
        return (
          <ClassesPage 
            setCurrentTab={setCurrentTab} 
            onOpenBooking={handleOpenBooking} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 flex flex-col justify-between font-sans relative antialiased selection:bg-gold-500/30 selection:text-white">
      {/* Absolute Crimson Backdrop glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-crimson-800/5 filter blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-gold-600/3 filter blur-3xl pointer-events-none z-0" />

      {/* Persistent App Header Navigation */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Frame Active Page Viewport Animation Wrapper */}
      <main className="flex-grow z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent App Footer Section */}
      <Footer 
        setCurrentTab={setCurrentTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Trial Booking Overlay Dialog */}
      <TrialBookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialClassTitle={initialBookingClass}
      />
    </div>
  );
}
