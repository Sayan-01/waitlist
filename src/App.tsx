import './App.css'
import Features from './components/home/Features';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItsWork';
import Marquee from './components/home/Marquee';
import Problem from './components/home/Problem';
import Navbar from './components/layout/Navbar';
import WaitlistSection from './components/layout/WaitlistSection';
import Comparision from './components/home/Comparision';

function App() {

  return (
    <div className="min-h-screen dark bg-[#0a0a0a] selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <HowItWorks/>
        <Comparision/>
        <WaitlistSection />
      </main>
    </div>
  );
}

export default App
