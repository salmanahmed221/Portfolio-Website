"use client";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaRegHandPaper, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { id: "homepage", label: "Home" },
  { id: "aboutpage", label: "About" },
  { id: "projectpage", label: "Projects" },
  { id: "skillpage", label: "Skills" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reset body.style.height that ScrollReveal sets
  useEffect(() => {
    const resetBodyHeight = () => {
      if (document.body.style.height === "100%") {
        document.body.style.height = "";
      }
      if ((document.documentElement as HTMLElement).style.height === "100%") {
        (document.documentElement as HTMLElement).style.height = "";
      }
    };

    resetBodyHeight();
    const timer = setTimeout(resetBodyHeight, 500);
    const timer2 = setTimeout(resetBodyHeight, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  // Close menu on resize above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback((id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  }, []);

  return (
    <>
      {/* Main nav bar */}
      <header className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-glass">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("homepage")}
            className="flex-shrink-0"
          >
            <Image
              src="/logo1.png"
              alt="Salman Ahmed Logo"
              width={110}
              height={40}
              className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Hire Me — desktop only */}
          <div className="hidden md:block">
            <Link
              href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
              target="_blank"
              className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            >
              Hire Me <FaRegHandPaper />
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="text-2xl text-slate-300 md:hidden hover:text-white transition-colors p-1 z-[70] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <ImCross className="text-xl" /> : <GiHamburgerMenu />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setMenuOpen(false)}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-dark-700 z-[65] md:hidden transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: menuOpen ? "-8px 0 24px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Drawer content */}
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header with logo and close */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <button
              onClick={() => handleNavClick("homepage")}
              className="flex-shrink-0"
            >
              <Image
                src="/logo1.png"
                alt="Salman Ahmed"
                width={100}
                height={36}
                className="brightness-0 invert opacity-90"
              />
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-white text-2xl transition-colors p-2"
              aria-label="Close menu"
            >
              <ImCross className="text-lg" />
            </button>
          </div>

          {/* Nav links with staggered animation */}
          <nav className="flex-1 px-6 py-8">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left text-white text-2xl font-bold py-4 hover:text-accent transition-colors duration-200 border-b border-white/5"
                style={{
                  animation: menuOpen
                    ? `slideInRight 0.4s ease-out ${i * 0.08}s both`
                    : "none",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom section - CTA and social */}
          <div
            className="p-6 border-t border-white/5 space-y-4"
            style={{
              animation: menuOpen
                ? "slideInRight 0.4s ease-out 0.32s both"
                : "none",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="btn-glow w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base"
            >
              <FaRegHandPaper />
              Hire Me
            </Link>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
                target="_blank"
                aria-label="LinkedIn"
                className="w-11 h-11 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent transition-colors"
              >
                <FaLinkedinIn className="text-lg" />
              </Link>
              <Link
                href="https://github.com/salmanahmed-dev"
                target="_blank"
                aria-label="GitHub"
                className="w-11 h-11 glass-card rounded-lg flex items-center justify-center text-slate-400 hover:text-accent transition-colors"
              >
                <FaGithub className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations in style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
