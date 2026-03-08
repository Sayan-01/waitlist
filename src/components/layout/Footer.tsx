import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/5">
      <Wrapper className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">Milestack</div>
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Milestack. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/sayandas_dev"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
