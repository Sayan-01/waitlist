import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tight">Milestack</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Newsletter
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">Join The Waitlist</button>
      </div>
    </nav>
  );
}
