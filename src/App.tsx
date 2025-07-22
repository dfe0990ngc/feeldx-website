import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import ValueProposition from './components/ValueProposition';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <ValueProposition />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;