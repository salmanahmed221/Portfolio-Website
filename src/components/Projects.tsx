"use client";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { ProjectsData } from "./Database";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  link: string;
  image: string;
  title: string;
}

export default function Projects() {
  return (
    <section id="projectpage" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="section-tag">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-base">
              A selection of projects I&apos;ve built — from landing pages to
              full-stack applications. Each one crafted with attention to
              detail.
            </p>
          </div>
        </RevealWrapper>

        {/* Bento-style projects grid */}
        <RevealWrapper
          origin="bottom"
          delay={100}
          duration={900}
          distance="50px"
          reset={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ProjectsData.map((elem: Project, index: number) => (
              <Link
                key={`${elem.id}-${index}`}
                href={elem.link}
                target="_blank"
                title={`Visit ${elem.title}`}
                className={`group relative glass-card rounded-2xl overflow-hidden card-hover block ${
                  // Make first and 5th cards wider on large screens (bento style)
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={elem.image}
                    alt={elem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm bg-accent/90 px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FiExternalLink />
                      Visit Site
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-4 flex items-center justify-between">
                  <p className="text-white font-semibold text-sm truncate pr-2">
                    {elem.title}
                  </p>
                  <FiExternalLink className="text-slate-500 group-hover:text-accent transition-colors flex-shrink-0 text-sm" />
                </div>
              </Link>
            ))}
          </div>
        </RevealWrapper>

        {/* Bottom CTA */}
        <RevealWrapper
          origin="bottom"
          delay={200}
          duration={800}
          distance="30px"
          reset={false}
        >
          <div className="flex justify-center mt-12">
            <Link
              href="https://www.linkedin.com/in/salman-ahmed-2ab77b248"
              target="_blank"
              className="btn-outline-glow flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            >
              View More Work
              <FiExternalLink />
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
