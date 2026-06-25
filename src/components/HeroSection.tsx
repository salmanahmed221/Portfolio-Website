"use client";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaArrowDown } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Herosection() {
  return (
    <section
      id="homepage"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark dot-grid pointer-events-none" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated orb */}
      <div className="absolute top-1/3 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float pointer-events-none hidden lg:block" />

      <div className="relative container mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className="animate-fade-up opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              <span className="section-tag">👋 Available for Work</span>
            </div>

            {/* Main heading */}
            <div
              className="animate-fade-up opacity-0 animate-delay-100"
              style={{ animationFillMode: "forwards" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                I&apos;m <span className="text-gradient">Salman</span>
                <br />
                Ahmed
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className="animate-fade-up opacity-0 animate-delay-200"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-accent rounded-full" />
                <p className="text-accent font-semibold text-lg tracking-wide">
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <div
              className="animate-fade-up opacity-0 animate-delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                Passionate about building fast, beautiful web experiences.
                Specializing in{" "}
                <span className="text-white font-medium">Next.js</span>,{" "}
                <span className="text-white font-medium">Tailwind CSS</span>,
                and <span className="text-white font-medium">Python AI</span> —
                crafting digital products that clients love.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="animate-fade-up opacity-0 animate-delay-400 flex flex-wrap gap-4 mt-2"
              style={{ animationFillMode: "forwards" }}
            >
              <Link
                href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
                target="_blank"
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm"
              >
                <HiOutlineDocumentDownload className="text-lg" />
                Hire Me
              </Link>
              <button
                onClick={() => scrollToSection("projectpage")}
                className="btn-outline-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              >
                View Projects
              </button>
            </div>

            {/* Social links */}
            <div
              className="animate-fade-up opacity-0 animate-delay-500 flex items-center gap-4 mt-2"
              style={{ animationFillMode: "forwards" }}
            >
              <span className="text-slate-600 text-xs uppercase tracking-widest">
                Follow
              </span>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
                  target="_blank"
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all duration-200 card-hover"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/salmanahmed-dev"
                  target="_blank"
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all duration-200 card-hover"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Top stat cards row */}
            <div className="flex gap-4">
              <div className="glass-card rounded-2xl p-5 text-center card-hover min-w-[130px]">
                <p className="text-4xl font-black text-gradient">4+</p>
                <p className="text-slate-400 text-xs mt-1 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="glass-card rounded-2xl p-5 text-center card-hover min-w-[130px]">
                <p className="text-4xl font-black text-gradient">50+</p>
                <p className="text-slate-400 text-xs mt-1 font-medium">
                  Projects Done
                </p>
              </div>
            </div>

            {/* Tech stack card */}
            <div className="glass-card rounded-2xl p-6 w-full max-w-[280px] card-hover">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3 font-semibold">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently working on */}
            <div className="glass-card rounded-2xl p-5 w-full max-w-[280px] card-hover">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  Open to Work
                </p>
              </div>
              <p className="text-white text-sm font-medium mt-1">
                Available for freelance &amp; full-time roles
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("aboutpage")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce hover:text-slate-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FaArrowDown className="text-sm" />
        </button>
      </div>
    </section>
  );
}
