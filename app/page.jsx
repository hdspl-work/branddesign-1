import Image from "next/image";

import { Navbar, Hero, BrandLogos, Projects, Testimonial, CTA, Footer, BTT } from "./(components)";

export default function Home() {
  return (
    <div>
      <section id="top">
        <Navbar />
      </section>

      <section id="home">
        <Hero />
      </section>

      <section id="logos">
        <BrandLogos />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <Testimonial />
      </section>

      <section id="contact">
        <CTA />
      </section>

      <section>
        <Footer />
      </section>
      <BTT />
    </div>
  );
}
