import { motion } from "motion/react";
import { MessageSquareOff, FolderSearch, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const problems = [
  {
    title: "Scattered Feedback",
    description: "Feedback is lost in endless email chains and WhatsApp messages.",
    icon: MessageSquareOff,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    title: "Lost Files",
    description: "Important assets and documents get buried in messy Google Drive folders.",
    icon: FolderSearch,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Progress Blindness",
    description: "Clients are constantly asking for updates because they can't see progress.",
    icon: Clock,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Approval Bottlenecks",
    description: "Slow sign-offs and unclear approvals delay your project timelines.",
    icon: AlertCircle,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Collaboration is Broken</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Agencies spend 40% of their time just managing communication. We're fixing that.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors h-full">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 rounded-lg ${problem.bg} flex items-center justify-center mb-4`}>
                    <problem.icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
