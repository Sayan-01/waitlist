import { motion } from "motion/react";
import { Card } from "../ui/card";

export default function FeaturePreview() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Designed for the modern agency workflow.</h2>
              <p className="text-zinc-400 text-lg mb-8">We've obsessed over every detail to make Milestack the fastest way to collaborate with clients.</p>

              <ul className="space-y-4">
                {["Real-time notifications", "Custom branding", "Magic link invites", "Mobile optimized"].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card className="bg-zinc-900 border-zinc-800 shadow-2xl overflow-hidden">
                  <div className="h-8 bg-zinc-800/50 border-b border-zinc-700/50 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-4 w-32 bg-zinc-800 rounded" />
                      <div className="h-8 w-24 bg-emerald-500/20 rounded-full" />
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 w-1/4 bg-zinc-800 rounded" />
                          <div className="h-12 w-full bg-zinc-800/50 rounded-lg" />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="aspect-video bg-zinc-800/30 rounded-lg border border-zinc-800 flex items-center justify-center"
                          >
                            <div className="w-6 h-6 bg-zinc-800 rounded" />
                          </div>
                        ))}
                      </div>

                      <div className="h-24 w-full bg-zinc-800/20 border border-dashed border-zinc-700 rounded-xl flex items-center justify-center text-zinc-600 text-sm">Drop files here to upload</div>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-emerald-500 text-black font-bold px-4 py-2 rounded-lg shadow-xl text-sm z-20"
                >
                  Approved! 🎉
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-zinc-800 border border-zinc-700 p-4 rounded-xl shadow-2xl z-20 max-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500" />
                    <div className="h-2 w-16 bg-zinc-700 rounded" />
                  </div>
                  <div className="h-2 w-full bg-zinc-700 rounded mb-1" />
                  <div className="h-2 w-2/3 bg-zinc-700 rounded" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
