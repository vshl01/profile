import AboutPreview from "../../components/section/About";
import Contact from "../../components/section/Contact";
import Hero from "../../components/section/Hero";
import ProjectsPreview from "../../components/section/Project";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutPreview />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectsPreview />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact/>
      </section>
    </div>
  );
};

export default Home;
