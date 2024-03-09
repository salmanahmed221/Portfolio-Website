"use client";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegHandPaper } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(true);
  return (
    <>
      <div className="bg-gray-100 fixed top-0 w-[100%] z-10">
        <div className="container flex justify-between items-center py-4 mx-auto px-4">
          {/* Logo */}

          <div>
            <Image src="/logo1.png" alt="logo" width={120} height={120} />
          </div>

          {/* Links */}

          <div className="md:flex gap-6 hidden">
            <Link
              href={"#homepage"}
              target="_parent"
              className=" hover:text-[#ff4D41]"
              title="click to visit"
            >
              Home
            </Link>
            <Link
              href={"#aboutpage"}
              target="_parent"
              className=" hover:text-[#ff4D41]"
              title="click to visit"
            >
              About
            </Link>
            <Link
              href={"#projectpage"}
              target="_parent"
              className=" hover:text-[#ff4D41]"
              title="click to visit"
            >
              Projects
            </Link>
            <Link
              href={"#skillpage"}
              target="_parent"
              className=" hover:text-[#ff4D41]"
              title="click to visit"
            >
              Skills
            </Link>
          </div>

          {/* Button */}

          <div>
            <button className="hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200">
              <Link
                href={
                  "https://www.linkedin.com/in/salman-ahmed-2ab77b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                title="click to visit"
                target="_blank"
              >
                Hire Me <FaRegHandPaper />
              </Link>
            </button>
          </div>

          {/* Hamburger menu */}
          <div
            className="text-[24px] md:hidden pr-5 z-10"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <GiHamburgerMenu /> : <ImCross />}
          </div>

          {/* Overlay */}
          {!nav ? (
            <div className="gap-6 md:hidden fixed top-0 left-0 h-[50%] bg-white text-black w-full flex flex-col font-bold text-xl justify-center items-center">
              <Link
                href={"#homepage"}
                target="_parent"
                title="click to visit"
                onClick={() => setNav(!nav)}
              >
                Home
              </Link>
              <Link
                href={"#aboutpage"}
                target="_parent"
                title="click to visit"
                onClick={() => setNav(!nav)}
              >
                About
              </Link>
              <Link
                href={"#projectpage"}
                target="_parent"
                title="click to visit"
                onClick={() => setNav(!nav)}
              >
                Projects
              </Link>
              <Link
                href={"#skillpage"}
                target="_parent"
                title="click to visit"
                onClick={() => setNav(!nav)}
              >
                Skills
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
