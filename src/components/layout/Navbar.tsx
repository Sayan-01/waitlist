import Wrapper from "./Wrapper";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
      <Wrapper className="container mx-auto px-6 sm:h-20 h-18 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white tracking-tight">Milestack</a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#problem"
            className="hover:text-white transition-colors"
          >
            Problem
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#comparison"
            className="hover:text-white transition-colors"
          >
            Comparison
          </a>
        </div>
        <a href="/">
          <button className="inline-flex  items-center justify-center rounded-full  text-sm font-medium text-white hover:text-black hover:bg-white transition-colors">Join the Waitlist</button>
        </a>{" "}
      </Wrapper>
    </nav>
  );
}
