import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import Wrapper from "../layout/Wrapper";

const rows = [
  { workflow: "Client Feedback", old: "Scattered email threads", milestack: "Centralized feedback hub" },
  { workflow: "File Revisions", old: "Multiple tools, no versioning", milestack: "Built-in version tracking" },
  { workflow: "Client Approvals", old: "Random messages & calls", milestack: "Milestone-based approvals" },
  { workflow: "Project Visibility", old: "Clients keep asking for updates", milestack: "Real-time progress portal" },
  { workflow: "Payments", old: "Separated payment history", milestack: "Integrated history on milestone" },
  { workflow: "Onboarding", old: "Back-and-forth emails", milestack: "Magic link client portal" },
  { workflow: "Communication", old: "WhatsApp, Slack, Email chaos", milestack: "One unified workspace" },
  { workflow: "Deliverables", old: "Shared folders with no context", milestack: "Structured delivery flow" },
];

const Comparision = () => (
  <section
    id="comparison"
    className="py-24 md:py-36 relative overflow-hidden"
  >
    <div className="absolute inset-0 rotate-180  flex justify-center gap-2 opacity-10 pointer-events-none w-full left-0 right-0 z-100">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="w-16 h-[50%] bg-gradient-to-b from-white/60 to-transparent"
          style={{
            opacity: 0.6,
            transform: `translateY(${i % 2 === 0 ? "-20%" : "-40%"})`,
          }}
        />
      ))}
    </div>
    <Wrapper className="container max-w-5xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            What You Should Do Instead
          </div>
          <h2 className="text-3xl md:text-5xl text-white mb-4 font-serif italic">Traditional Workflow vs Milestack</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">See how Milestack replaces your broken workflow with a streamlined system.</p>
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-indigo-500/20 to-transparent"
        style={{
          background: "linear-gradient(160deg, hsl(var(--color-indigo-500)) 0%, hsl(var(--color-indigo-500) / 0.8) 100%)",
        }}
      >
        {/* Header */}
        <div className="grid grid-cols-3 text-sm font-semibold border-b border-border/40">
          <div className="px-4 md:px-6 md:pl-10 py-4 text-muted-foreground border-r border-border/40">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Workflow
            </div>
          </div>
          <div className="px-4 md:px-6 md:pl-10 py-4 text-destructive/80 flex items-center gap-2 border-r border-border/40">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Traditional Way
            </span>
          </div>
          <div className="px-4 md:px-6 md:pl-10 py-4 text-primary flex items-center gap-2 ">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Milestack
            </span>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className={`grid grid-cols-3 text-sm ${i !== rows.length - 1 ? "border-b border-border/60" : ""} hover:bg-primary/[0.03] transition-colors`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="px-4 md:px-6 md:pl-10 py-4 font-medium text-foreground border-r border-border/60">{row.workflow}</div>
            <div className="px-4 md:px-6 md:pl-10 py-4 text-muted-foreground flex items-start gap-2 border-r border-border/60">
              <X
                className="text-destructive/60 shrink-0 mt-0.5"
                size={15}
              />
              <span>{row.old}</span>
            </div>
            <div className="px-4 md:px-6 md:pl-10 py-4 text-muted-foreground flex items-start gap-2">
              <Check
                className="text-emerald-500 shrink-0 mt-0.5"
                size={15}
              />
              <span>{row.milestack}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <a href="/">
          <button className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Join the Waitlist
          </button>
        </a>
      </motion.div>
    </Wrapper>
  </section>
);

export default Comparision;
