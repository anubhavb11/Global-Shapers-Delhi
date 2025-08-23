import type { Metadata } from "next";
import HeroSection from "../components/home/HeroSection";
import AboutFeature from "../components/home/AboutFeature";
import MissionVisionSection from "../components/home/MissionVisionSection";
import ImpactSection from "../components/home/ImpactSection";
import CuratorshipSection from "../components/home/CuratorshipSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import JoinUsSection from "../components/home/JoinUsSection";
import StayConnectedSection from "../components/home/StayConnectedSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Global Shapers Delhi - Empowering young leaders to create positive change in Delhi through innovative projects in climate action, mental health, and youth leadership.",
  keywords: ["Global Shapers Delhi", "Youth Leadership", "Climate Action", "Mental Health", "Social Impact", "Delhi", "Young Leaders"],
  openGraph: {
    title: "Global Shapers Delhi - Empowering Young Leaders for Change",
    description: "Welcome to Global Shapers Delhi - Empowering young leaders to create positive change in Delhi through innovative projects in climate action, mental health, and youth leadership.",
    url: "/",
  },
  twitter: {
    title: "Global Shapers Delhi - Empowering Young Leaders for Change",
    description: "Welcome to Global Shapers Delhi - Empowering young leaders to create positive change in Delhi through innovative projects in climate action, mental health, and youth leadership.",
  },
};

export default function Home() {
  return (
    <div >
      <HeroSection />
      <AboutFeature />
      <MissionVisionSection />
      <ImpactSection />
      <CuratorshipSection />
      <ProjectsSection />
      <TestimonialSection />
      <JoinUsSection />
      <StayConnectedSection />
    </div>
  );
}
