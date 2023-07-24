"use client";
import { RevealWrapper } from "next-reveal";
export default function Skills() {
    return (
        <section id="skillpage">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
                    Skills
                    <div className="bg-[#ff4D41] h-2 w-[40px] translate-y-1"></div>
                </h1>
                <p className="text-gray-600 -mt-10 mb-10 font-medium">
                    I Love learning new technologies, currently I am working with, following technologies.
                </p>
                <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={2000}
                    distance="100px"
                    reset={true}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="font-semibold">CSS</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">HTML</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">JAVASCRIPT</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">TYPESCRIPT</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">NODE.JS</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">NEXT. JS 13</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[80%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">CHAKRA UI</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold ">TAILWIND CSS</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold ">GITHUB</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold ">CONTENTFUL</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold ">SANITY</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold ">CLERK</p>
                            <div className="relative bg-gray-400 h-[6px] mt-2 w-[90%]">
                                <div className="bg-[#ff4D41] absolute h-[6px] w-[90%]"></div>
                            </div>
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
