import CarHero from "@/components/three/CarHero";
import Marquee from "@/components/Marquee";
import Section from "@/components/Section";
import WorkCard from "@/components/WorkCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <CarHero />
      <Marquee />

      <Section id="work" title="Selected Work" className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WorkCard title="Team Phoenix" category="Brand + Web" />
          <WorkCard title="Apex Analytics" category="Product" />
          <WorkCard title="Rapid Labs" category="Web" />
          <WorkCard title="Ignition" category="Campaign" />
        </div>
      </Section>

      <Section id="services" title="Services" className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-6 text-white/70">
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="mb-2 font-semibold text-white">Brand Systems</h3>
            Visual identity, design language, asset kits.
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="mb-2 font-semibold text-white">Web Experience</h3>
            Marketing sites, interactions, motion, performance.
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <h3 className="mb-2 font-semibold text-white">Product UI</h3>
            Design systems, complex flows, prototyping.
          </div>
        </div>
      </Section>

      <Section id="about" title="About" className="mt-20">
        <p className="max-w-3xl text-white/70">
          We are a small senior team obsessed with speed and craft. We fuse strategy, design, and engineering to deliver launch‑ready experiences with cinematic polish.
        </p>
      </Section>

      <Section id="contact" title="Let’s build something fast" className="mt-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <input className="rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Name" />
          <input className="rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Email" />
          <input className="md:col-span-2 rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Company" />
          <textarea className="md:col-span-2 rounded-md border border-white/10 bg-transparent px-3 py-2" rows={5} placeholder="What are you building?" />
          <div>
            <button className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">
              Send inquiry
            </button>
          </div>
        </form>
      </Section>

      <Footer />
    </div>
  );
}
