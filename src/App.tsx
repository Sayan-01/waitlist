
import './App.css'
import FeaturePreview from './components/home/FeaturePreview';
import Features from './components/home/Features';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItsWorks';
import Problem from './components/home/Problem';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import WaitlistSection from './components/layout/WaitlistSection';

function App() {

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <FeaturePreview />
        <HowItWorks />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
