import { motion } from "motion/react";
import { Layout, Milestone, CheckSquare, MessageSquare } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const features = [
  {
    title: "Client Portal",
    description: "A dedicated, white-labeled space for your clients to view everything.",
    icon: Layout,
  },
  {
    title: "Milestone Tracking",
    description: "Visual timelines that keep everyone aligned on project progress.",
    icon: Milestone,
  },
  {
    title: "File Approvals",
    description: "One-click approvals for designs, copies, and development builds.",
    icon: CheckSquare,
  },
  {
    title: "Structured Feedback",
    description: "Contextual comments directly on files and project milestones.",
    icon: MessageSquare,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">One Portal for Everything</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Everything you need to deliver a world-class client experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 p-8 hover:border-emerald-500/30 transition-all duration-500 group">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
