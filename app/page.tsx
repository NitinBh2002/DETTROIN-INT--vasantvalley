import HeroSection from "@/src/widgets/homepage/HeroSection";
import PhilosophySection from "@/src/widgets/homepage/PhilosophySection";
import EducationLifeSection from "@/src/widgets/homepage/EducationLifeSection";
import OurJourneySection from "@/src/widgets/homepage/OurJourneySection";
import LearningExperienceSection from "@/src/widgets/homepage/LearningExperienceSection";
import Announcement from "@/src/widgets/homepage/Announcement";
import InstagramSection from "@/src/widgets/homepage/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <OurJourneySection />
      <EducationLifeSection />
      <LearningExperienceSection />
      <Announcement />
      <InstagramSection />
    </>
  );
}
