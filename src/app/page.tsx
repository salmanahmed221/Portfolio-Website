import About from "../components/About";
import Herosection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Page() {
  return (
    <div>
      <Herosection />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}
