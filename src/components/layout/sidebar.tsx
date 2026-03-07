"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileText, MessageSquare, Settings, User, History, Sparkles, Zap, BarChart3 } from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/resume", label: "Resume Match", icon: Zap },
  { href: "/dashboard/ats", label: "ATS Builder", icon: Sparkles },
  { href: "/dashboard/interview", label: "Interview Prep", icon: MessageSquare },
  { href: "/dashboard/history", label: "History", icon: History },
  { href: "/dashboard/usage", label: "Usage", icon: BarChart3 },
];

const bottomLinks = [
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 lg:w-64 flex flex-col border-r bg-card/50 backdrop-blur-xl h-screen sticky top-0 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
          <Zap
            className="text-primary-foreground fill-primary-foreground"
            size={24}
          />
        </div>
        <span className="text-xl font-bold tracking-tight hidden lg:block">Antigravity</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 py-4">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
              pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <link.icon
              size={22}
              className={cn("transition-transform duration-200 group-hover:scale-110", pathname === link.href ? "text-primary" : "text-muted-foreground")}
            />
            <span className="font-medium hidden lg:block">{link.label}</span>
            {pathname === link.href && <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
          </Link>
        ))}
      </nav>

      <div className="px-4 py-6 space-y-2 border-t">
        {bottomLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <link.icon size={22} />
            <span className="font-medium hidden lg:block">{link.label}</span>
          </Link>
        ))}

        <div className="mt-4 pt-4 flex items-center gap-3 px-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-[2px]">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-xs font-bold">JD</div>
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-semibold">Jake Richards</p>
            <p className="text-xs text-muted-foreground">Pro Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
