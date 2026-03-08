import Wrapper from "./Wrapper";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
      <Wrapper className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tight">Milestack</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Newsletter
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <a href="/">
          <button className="inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-medium text-white hover:text-black hover:bg-white transition-colors">
            Join the Waitlist
          </button>
        </a>{" "}
      </Wrapper>
    </nav>
  );
}
