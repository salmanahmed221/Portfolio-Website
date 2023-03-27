"use client"
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from 'next-reveal';


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
                <div className="md:flex md:justify-around">
                    <div>
                        <Link href={"https://chakra-ui-pricing-project.vercel.app/"} target="_blank" title="click to visit">
                            <Image src="/pricing.png" alt="logo" height={300} width={300} className="border-4 border-black" />
                            <p className="text-center font-extrabold pr-8 md:pr-0">Pricing Ui</p>
                        </Link>
                    </div>


                    <div className="md:my-0 my-16">
                        <Link href={"https://text-utils-react-flax.vercel.app/"} target="_blank" title="click to visit" >
                            <Image src="/text.png" alt="logo" height={300} width={300} className="border-4 border-black" />
                            <p className="text-center font-extrabold pr-10 md:pr-0">Text-Utils-App</p>
                        </Link>
                    </div>


                    <div>
                        <Link href={"https://nextjs-counter-app.vercel.app/"} target="_blank" title="click to visit">
                            <Image src="/counter.png" alt="logo" height={300} width={300} className="border-4 border-black" />
                            <p className="text-center font-extrabold pr-11 md:pr-0">Counter App</p>
                        </Link>
                    </div>
                </div>
            </RevealWrapper>
        </div>
    </section>
}
