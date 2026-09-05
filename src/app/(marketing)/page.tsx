import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import WorkProcess from "@/components/sections/WorkProcess";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProcessAccordion } from "@/components/home/ProcessAccordion";



export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WorkProcess />
      <ProjectsPreview />
      <ProcessAccordion />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

