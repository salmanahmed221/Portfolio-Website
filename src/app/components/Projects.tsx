"use client"
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from 'next-reveal';
import { ProjectsData } from "./Database";


export default function Projects() {
    return <section id="projectpage">
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
                Projects
                <div className="bg-[#ff4D41] h-2 w-[40px] translate-y-1"></div>
            </h1>

            {/* Projects List */}
            <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="100px"
                reset={true}
            >
                <div className="grid md:grid-cols-4 gap-5">
                    {ProjectsData.map((elem: any) => (
                        <div key={elem.key}>
                            <Link href={elem.link} target="_blank" title="click to visit">
                                <Image src={elem.image} alt="logo" height={300} width={300} className="border-4 border-black" />
                                <p className="text-center font-extrabold pr-8 md:pr-0">{elem.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </RevealWrapper>
        </div>
    </section>
}
