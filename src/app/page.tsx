import HeroSection from "../components/home/HeroSection";
import AboutFeature from "../components/home/AboutFeature";
import ImpactStats from "../components/home/ImpactStats";
import TeamSection from "../components/home/TeamSection";
import ProjectsSection from "../components/home/ProjectsSection";
import TestimonialSection from "../components/home/TestimonialSection";
import JoinUsSection from "../components/home/JoinUsSection";
import UpdatesSection from "../components/home/UpdatesSection";
import StayConnectedSection from "../components/home/StayConnectedSection";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <AboutFeature />
      <ImpactStats />
      <TeamSection />
      <ProjectsSection />
      <TestimonialSection />
      <JoinUsSection />
      <UpdatesSection />
      <StayConnectedSection />
    </div>
  );
}
