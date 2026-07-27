import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/widgets/homepage/HeroSection";
import PhilosophySection from "@/src/widgets/homepage/PhilosophySection";
import EducationLifeSection from "@/src/widgets/homepage/EducationLifeSection";
import OurJourneySection from "@/src/widgets/homepage/OurJourneySection";
import LearningExperienceSection from "@/src/widgets/homepage/LearningExperienceSection";
import Announcement from "@/src/widgets/homepage/Announcement";
import InstagramSection from "@/src/widgets/homepage/InstagramSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <OurJourneySection />
        <EducationLifeSection />
        <LearningExperienceSection />
        <Announcement />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}
