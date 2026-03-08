import { motion } from "motion/react";
import WaitlistForm from "./WaitlistForm";
import Footer from "./Footer";

export default function WaitlistSection() {
  return (
    <section className="pt-28 bg-gradient-to-br from-emerald-500/20 to-transparent relative overflow-hidden flex flex-col gap-28">
      {/* Background Vertical Bars Gradient - Inspired by the reference image */}
      <div className="absolute inset-0 flex justify-center gap-2 opacity-10 pointer-events-none w-full left-0 right-0 z-100">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-16 h-full bg-gradient-to-b from-emerald-500/60 to-transparent"
            style={{
              opacity: 0.6,
              transform: `translateY(${i % 2 === 0 ? "-20%" : "-40%"})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your client experience?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Join the waitlist today and be the first to know when we launch. Early adopters get exclusive lifetime pricing.</p>

          <div className="flex justify-center">
            <WaitlistForm variant="hero" />
          </div>

          <p className="mt-6 text-zinc-500 text-sm">Be the first to try Milestack. No spam, ever.</p>
        </motion.div>
      </div>
      <Footer/>
    </section>
  );
}
