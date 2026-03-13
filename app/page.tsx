// app/page.tsx (Server Component by default)
import Scene from "@/components/BackgroundScene";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import ScrollHandler from "@/components/ScrollHandler"; // New Client Component

export default function Home() {
  return (
    <>
      {/* 1. Client-side scroll logic separated */}
      <ScrollHandler />

      <main className="relative min-h-screen" id="home">
        {/* Background Scene (Usually Client-side for Three.js/Particles) */}
        <Scene />

        <div className="relative z-10">
          <Hero />

          <TechStack />

          <WhyUs />

          {/* 2. SEO Tip: Use <section> tags with IDs instead of <div> wrappers 
              for better semantic structure. */}
          <section id="services" aria-label="Our Services">
            <Services />
          </section>

          <section id="infra" aria-label="Infrastructure Solutions">
            <Infrastructure />
          </section>

          <Trust />

          <section id="testimonials" aria-label="Customer Testimonials">
            <Portfolio />
          </section>
        </div>
      </main>
    </>
  );
}
