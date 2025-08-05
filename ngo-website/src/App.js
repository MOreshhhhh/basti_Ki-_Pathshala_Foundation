import React from 'react';

import HeroHeader from './components/HeroHeader';
import HeroCTA from './components/HeroCTA';
import AboutUs from './components/AboutUs';
import ImpactStats from './components/ImpactStats';
import VolunteerForm from './components/VolunteerForm';
import StickyFAB from './components/StickyFAB';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeroHeader />
      <HeroCTA />
      <AboutUs />
      <VolunteerForm />
      <ImpactStats />     
      * <StickyFAB />
      <Footer />
    </>
  );
}

export default App;
