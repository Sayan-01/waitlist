import { motion } from "motion/react";
import Wrapper from "../layout/Wrapper";

const steps = [
  {
    title: "Create Project",
    description: "Set up your workspace and define project milestones in seconds with our intuitive interface.",
    img: "/step1.png",
    color: "from-emerald-500/40 to-emerald-500/0",
    iconColor: "text-emerald-500",
  },
  {
    title: "Invite Client",
    description: "Send a secure magic link. No passwords, no friction—just instant access to their portal.",
    img: "/step2.png",
    color: "from-indigo-500/40 to-indigo-500/0",
    iconColor: "text-indigo-500",
  },
  {
    title: "Get Approvals",
    description: "Receive feedback and sign-offs faster than ever before with structured, contextual comments.",
    img: "/step3.png",
    color: "from-purple-500/40 to-purple-500/0",
    iconColor: "text-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="pt-24 md:pt-36 pb-4 relative overflow-hidden"
    >
      <Wrapper className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                How It Works
              </div>
              <h2 className="text-3xl md:text-5xl text-white mb-4 font-serif italic">How Milestack Works</h2>
              <p className="text-zinc-400 max-w-xl mx-auto">We've distilled complex agency workflows into simple, high-performance steps.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative ">
          {/* Connector Path (Desktop) */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-white/20 to-transparent hidden lg:block -translate-y-[100px]" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 pb-8 hover:border-white/10 transition-colors h-full flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 px-4 py-1 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-tighter">
                  Step 0{index + 1}
                </div>

                {/* Illustration with Glow */}
                <div className="relative mb-8 ">
                  <div className={`absolute inset-0 bg-linear-to-br ${step.color} blur-3xl rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative w-full  rounded-[1.5rem] bg-zinc-800/50 border border-white/5 flex items-center justify-center shadow-2xl overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full aspect-8/7  object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
              </div>

              {/* Mobile Arrows */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 lg:hidden">
                  <div className="h-12 w-px bg-linear-to-b from-white/10 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
