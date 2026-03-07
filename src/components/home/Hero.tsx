import { motion } from "motion/react";
import WaitlistForm from "./WaitlistForm";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Vertical Bars Gradient - Inspired by the reference image */}
      <div className="absolute inset-0 -z-10 flex justify-center gap-4 opacity-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-full bg-gradient-to-t from-emerald-500/40 to-transparent"
            style={{
              opacity: 1 - i * 0.05,
              transform: `translateY(${i % 2 === 0 ? "20%" : "40%"})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now accepting early access
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Stop Managing Client Feedback in <span className="text-zinc-500 italic font-serif">Email Threads</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Milestack is the client portal built for web design agencies. Manage approvals, files, milestones, and feedback in one place.
          </p>

          <div className="flex flex-col items-center gap-6">
            <WaitlistForm variant="hero" />

            <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium group">
              See how it works
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
