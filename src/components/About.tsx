"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaLinkedinIn, FaRegHandPaper } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

const info = [
  {
    icon: <FiBookOpen className="text-accent text-xl flex-shrink-0" />,
    text: "Government College University Faisalabad",
  },
  {
    icon: <GoLocation className="text-accent text-xl flex-shrink-0" />,
    text: "Lahore, Pakistan",
  },
  {
    icon: <HiOutlineCode className="text-accent text-xl flex-shrink-0" />,
    text: "Full Stack Web Developer",
  },
];

export default function About() {
  return (
    <section id="aboutpage" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <RevealWrapper
          origin="top"
          delay={0}
          duration={800}
          distance="40px"
          reset={false}
        >
          <div className="mb-16">
            <span className="section-tag">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar with decorative elements */}
          <RevealWrapper
            origin="left"
            delay={100}
            duration={900}
            distance="60px"
            reset={false}
          >
            <div className="relative flex justify-center">
              {/* Glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
              </div>

              {/* Image container */}
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-indigo-500/20 blur-sm" />
                <div className="relative glass-card rounded-2xl overflow-hidden p-1">
                  <Image
                    src="/Avatar.png"
                    alt="Salman Ahmed"
                    height={380}
                    width={340}
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-glow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Right — Info */}
          <RevealWrapper
            origin="right"
            delay={200}
            duration={900}
            distance="60px"
            reset={false}
          >
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  I&apos;m a passionate{" "}
                  <span className="text-gradient">Full Stack Developer</span>
                </h3>
                <p className="text-slate-400 leading-relaxed text-base">
                  Hi! I&apos;m Salman Ahmed, a web developer with over 4 years
                  of professional experience. I love crafting pixel-perfect,
                  fast, and accessible web applications that make users smile.
                  My focus is on modern frontend development paired with robust
                  backend solutions.
                </p>
              </div>

              {/* Info items */}
              <div className="flex flex-col gap-3">
                {info.map((item, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                  >
                    {item.icon}
                    <span className="text-slate-300 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-xl p-4 text-center card-hover"
                  >
                    <p className="text-2xl font-black text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
                target="_blank"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm self-start"
              >
                <FaRegHandPaper />
                Hire Me
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
