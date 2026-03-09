import { ClipboardCheck, FileCheck, LayoutDashboard, Link2, MessageSquare, Milestone } from "lucide-react";
import { motion } from "motion/react";
import Wrapper from "../layout/Wrapper";
import { Card } from "../ui/card";

const features = [
  { icon: LayoutDashboard, title: "Multi-Client Dashboard", desc: "See all active clients and projects at a glance with quick access to milestones, files, and messages." },
  { icon: Link2, title: "Magic Link Invites", desc: "Invite clients via branded magic links — no signup required. They land directly in their project portal." },
  { icon: ClipboardCheck, title: "Onboarding Checklists", desc: "Create structured asset checklists for clients with upload, review, and approval statuses." },
  { icon: FileCheck, title: "File Approvals", desc: "Upload deliverables and let clients approve, request changes, or comment — all with clear status tracking." },
  { icon: Milestone, title: "Milestone Tracking", desc: "Break projects into milestones with due dates, payment links, attached files, and threaded comments." },
  { icon: MessageSquare, title: "Contextual Messaging", desc: "Threaded conversations tied to each milestone or file — never lose context in a general inbox again." },
];;

export default function Features() {
  return (
    <section
      id="features"
      className="pt-24 md:pt-36 pb-4"
    >
      <Wrapper className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            The Problem
          </div>
          <h2 className="text-3xl md:text-5xl text-white mb-4 font-serif italic">Better Client Project Management</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Manage clients, projects, files, approvals, and payments — all from a single, structured workspace.</p>
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
              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 sm:p-8 p-4 hover:border-emerald-500/30 transition-all duration-500 group">
                <div className="flex gap-6">
                  <div className="w-22 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
