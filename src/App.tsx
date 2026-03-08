
import './App.css'
import FeaturePreview from './components/home/FeaturePreview';
import Features from './components/home/Features';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItsWorks';
import Marquee from './components/home/Marquee';
import Problem from './components/home/Problem';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import WaitlistSection from './components/layout/WaitlistSection';

function App() {

  return (
    <div className="min-h-screen dark bg-[#0a0a0a] selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <FeaturePreview />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
