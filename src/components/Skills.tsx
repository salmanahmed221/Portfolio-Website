"use client";
import { RevealWrapper } from "next-reveal";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFastapi,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiContentful,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { BsDatabase, BsFileCode } from "react-icons/bs";

const skillCategories = [
  {
    label: "Frontend",
    color: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    iconColor: "text-blue-400",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Chakra UI", icon: <SiChakraui /> },
    ],
  },
  {
    label: "Backend & DB",
    color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20",
    iconColor: "text-emerald-400",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: <BsDatabase /> },
    ],
  },
  {
    label: "AI & Python",
    color: "from-violet-500/10 to-violet-600/5 border-violet-500/20",
    iconColor: "text-violet-400",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Generative AI", icon: <TbBrandOpenai /> },
    ],
  },
  {
    label: "Tools & CMS",
    color: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
    iconColor: "text-orange-400",
    skills: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Sanity", icon: <BsFileCode /> },
      { name: "Contentful", icon: <SiContentful /> },
      { name: "Clerk", icon: <BsDatabase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skillpage" className="relative py-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-dark-800/40 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Section header */}
        <RevealWrapper
          origin="top"
          delay={0}
          duration={800}
          distance="40px"
          reset={false}
        >
          <div className="mb-16">
            <span className="section-tag">What I Know</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl text-base">
              Technologies I work with daily — always learning, always growing.
            </p>
          </div>
        </RevealWrapper>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <RevealWrapper
              key={category.label}
              origin="bottom"
              delay={catIdx * 80}
              duration={800}
              distance="40px"
              reset={false}
            >
              <div
                className={`glass-card bg-gradient-to-br ${category.color} rounded-2xl p-6 card-hover h-full`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className={`w-1.5 h-5 rounded-full bg-gradient-to-b ${category.color.replace("from-", "from-").replace("/10", "").replace("/5", "").replace("/20", "")}`}
                  />
                  <p className="text-white font-bold text-sm uppercase tracking-widest">
                    {category.label}
                  </p>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 rounded-xl px-3 py-2 transition-all duration-200 group cursor-default"
                    >
                      <span
                        className={`${category.iconColor} text-base group-hover:scale-110 transition-transform`}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-slate-300 text-xs font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom quote */}
        <RevealWrapper
          origin="bottom"
          delay={400}
          duration={800}
          distance="30px"
          reset={false}
        >
          <div className="mt-12 text-center"></div>
        </RevealWrapper>
      </div>
    </section>
  );
}
