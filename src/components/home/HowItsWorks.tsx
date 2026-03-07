import { motion } from "motion/react";
import { Plus, UserPlus, Zap } from "lucide-react";

const steps = [
  {
    title: "Create Project",
    description: "Set up your project and define milestones in seconds.",
    icon: Plus,
  },
  {
    title: "Invite Client",
    description: "Send a magic link. No passwords or complex onboarding needed.",
    icon: UserPlus,
  },
  {
    title: "Get Approvals",
    description: "Receive feedback and sign-offs faster than ever before.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Three simple steps to a better client collaboration experience.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-8 h-8 text-emerald-500" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center">{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
