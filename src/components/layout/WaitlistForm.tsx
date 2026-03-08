import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function WaitlistForm({ variant = "default" }: { variant?: "default" | "hero" }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5129be4a-cdf5-41e2-8dc3-7d38ac0a6fa0",
          email: email,
          subject: "New Waitlist Signup - Milestack",
          from_name: "Milestack Waitlist",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 text-emerald-400 font-medium py-2 px-4 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/20"
      >
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span>You're on the list! We'll be in touch soon.</span>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${variant === "hero" ? "mx-auto" : ""}`}
    >
      <div className="flex-1">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-white/5 border-white/20 backdrop-blur-2xl text-white placeholder:text-zinc-500 h-12 rounded-full px-6 focus-visible:ring-emerald-500/50"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 px-8 rounded-full  text-black hover:bg-zinc-200 font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          "Join the Waitlist"
        )}
      </Button>
    </form>
  );
}
