import Link from "next/link";

export default function Herosection() {
  return (
    <section id="homepage">
      <div className="bg-[url('/bg.jpg')] h-screen bg-cover bg-fixed flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
            <div>
              <h1 className="text-5xl font-bold pt-20">
                I&apos;m Salman Ahmed
              </h1>
              <h4 className="text-2xl mt-3 font-bold">
                Full Stack Web Developer
              </h4>
            </div>

            <div className="bg-[#ff4D41] h-2 w-[40px]"></div>
            <div>
              <p className="font-semibold px-3">
                I am Salman Ahmed with extensive experience, a passionate and
                skilled professional ready to bring your digital ideas to life
                with a strong foundation in Next js and Tailwind CSS, coupled
                with cutting-edge Python generative AI, I offer a unique blend
                of creativity and technical prowess.
              </p>
              <button className="bg-[#ff4D41] text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200">
                <Link
                  href={
                    "https://www.linkedin.com/in/salman-ahmed-2ab77b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                  title="click to visit"
                  target="_blank"
                >
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}
