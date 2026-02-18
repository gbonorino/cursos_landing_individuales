import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { BioTimeline } from './components/BioTimeline';
import { CourseCatalog } from './components/CourseCatalog';
import { Testimonials } from './components/Testimonials';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { TrustBar } from './components/TrustBar';
import { CoursePage } from './components/CoursePage';

const ParentLanding: React.FC = () => (
  <>
    <Hero />
    <TrustBar />
    <BioTimeline />
    <CourseCatalog />
    <Testimonials />
    <LeadMagnet />
    <Footer />
    <ScrollToTop />
  </>
);

const App: React.FC = () => {
  return (
    <main
      className="min-h-screen text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900"
      style={{
        backgroundColor: '#fafaf9',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <Routes>
        <Route path="/" element={<ParentLanding />} />
        <Route path="/curso/:slug" element={<CoursePage />} />
      </Routes>
    </main>
  );
};

export default App;
