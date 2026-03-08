import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import WaitlistForm from "../layout/WaitlistForm";
import Wrapper from "../layout/Wrapper";


export default function Hero() {
  return (
    <section className="relative pt-32 overflow-hidden text-center h-screen w-full">
      <img
        src="/hero.svg"
        alt="Hero"
        width={1920}
        height={1080}
        className="w-full  absolute -bottom-5 left-0 right-0 z-0"
      />

      <Wrapper className="flex flex-col items-center relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Now accepting early access
          </span>
          <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-5 max-w-4xl mx-auto leading-[1.15] italic font-play">
            Stop Managing Client Feedback in <span className="text-zinc-500 italic">Endless Email Threads</span>
          </h1>
          <p className="text-md md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Milestack helps web design agencies manage <br/> approvals, feedback, and project milestones in one place.
          </p>

          <div className="flex flex-col items-center gap-6">
            <WaitlistForm variant="hero" />

            <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium group">
              See how it works
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
}
