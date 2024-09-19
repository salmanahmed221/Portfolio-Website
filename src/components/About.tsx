"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

export default function About() {
  return (
    <section id="aboutpage">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16">
          About me
          <div className="bg-[#ff4D41] h-2 w-[40px] translate-y-1"></div>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          <div>
            <Image
              src="/Avatar.png"
              alt="avatar"
              height={350}
              width={350}
              className="mx-auto"
            />
          </div>

          <div>
            <div className="flex items-center justify-between w-[300px]">
              <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="100px"
                reset={true}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 items-center font-medium">
                    <FiBookOpen className="text-[#ff4D41] text-[22px]" />
                    Study : University of Computer Science
                  </div>
                  <div className="flex gap-4 items-center font-medium">
                    <BsGlobe2 className="text-[#ff4D41] text-[22px]" />
                    Website : www.xyz.com
                  </div>
                  <div className="flex gap-4 items-center font-medium">
                    <TbPacman className="text-[#ff4D41] text-[22px]" />
                    Interest : Reading, Sports
                  </div>
                  <div className="flex gap-4 items-center font-medium">
                    <GoLocation className="text-[#ff4D41] text-[22px]" />
                    Location : Lahore, Pakistan
                  </div>

                  <div className="max-w-[800px] ">
                    <h2 className="font-bold mt-16 mb-10">
                      I&apos;m Salman and Frontend Developer
                    </h2>
                    <p className="text-gray-600 md:w-[460px] text-justify font-medium">
                      Hi! My name is Salman Ahmed. I am a web Developer, and
                      I&apos;m very passionate and doing my work with more than
                      2 year experience as a professional
                    </p>
                    <button className="bg-[#ff4D41] text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200">
                      <Link
                        href={
                          "https://www.linkedin.com/in/salman-ahmed-2ab77b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        }
                        title="click to visit"
                        target="_blank"
                      >
                        Hire Me
                      </Link>
                    </button>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
