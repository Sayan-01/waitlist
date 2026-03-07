import { motion } from "motion/react";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Vertical Bars Gradient - Inspired by the reference image */}
      <div className="absolute inset-0 -z-10 flex justify-center gap-4 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-full bg-gradient-to-b from-emerald-500/40 to-transparent"
            style={{
              opacity: 1 - i * 0.05,
              transform: `translateY(${i % 2 === 0 ? "-20%" : "-40%"})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center">
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
    </section>
  );
}
