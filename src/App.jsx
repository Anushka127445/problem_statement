import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-poppins selection:bg-neon selection:text-white">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <FAQ />
        <Registration />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
