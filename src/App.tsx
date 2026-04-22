import { useState } from 'react';
import Nav from './components/Nav';
import AuthModal from './components/AuthModal';
import Hero from './components/Hero';
import AboutSlider from './components/AboutSlider';
import Approach from './components/Approach';
import MadeToAge from './components/MadeToAge';
import InSitu from './components/InSitu';
import Customise from './components/Customise';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Stats from './components/Stats';
import Locator from './components/Locator';
import Vision from './components/Vision';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

// Show loader only on first visit per browser session
const hasVisited = sessionStorage.getItem('mjcasa_visited');

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(!hasVisited);
  const [contentVisible, setContentVisible] = useState(!!hasVisited);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('mjcasa_visited', '1');
    setShowLoader(false);
    // slight delay so home page fades in gently after loader exits
    setTimeout(() => setContentVisible(true), 50);
  };

  return (
    <>
      {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}

      <div
        className="w-full min-h-screen bg-[var(--bg)] overflow-hidden"
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: contentVisible ? 'opacity 0.7s 0.1s cubic-bezier(0.25,1,0.5,1)' : 'none',
        }}
      >
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        <Nav onOpenLogin={() => setIsAuthModalOpen(true)} />
        <Hero />
        <AboutSlider />
        <Approach />
        <MadeToAge />
        <InSitu />
        <Customise />
        <Projects />
        <Blog />
        <Stats />
        <Locator />
        <Vision />
        <Footer />
      </div>
    </>
  );
}
