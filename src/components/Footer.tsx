"use client";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaRegHandPaper } from "react-icons/fa";

const navLinks = [
  { id: "homepage", label: "Home" },
  { id: "aboutpage", label: "About" },
  { id: "projectpage", label: "Projects" },
  { id: "skillpage", label: "Skills" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-accent/8 blur-[60px] pointer-events-none" />

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black text-xl">
              Salman<span className="text-gradient">.</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer crafting fast, beautiful web experiences
              with modern technologies.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2">
              <Link
                href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
                target="_blank"
                aria-label="LinkedIn"
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent transition-colors"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/salmanahmed221"
                target="_blank"
                aria-label="GitHub"
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent transition-colors"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* Nav links — use scrollIntoView so they work regardless of scroll container */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <p className="text-slate-500 text-sm mb-4">
              Have a project in mind? Let&apos;s work together.
            </p>
            <Link
              href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
              target="_blank"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm"
            >
              <FaRegHandPaper />
              Hire Me
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year}{" "}
            <span className="text-slate-400 font-medium">Salman Ahmed</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
