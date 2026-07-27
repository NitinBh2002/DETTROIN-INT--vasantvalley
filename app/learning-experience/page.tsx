import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import LearningBanner from "@/src/widgets/learningExperience/LearningBanner";
import LearningOverview from "@/src/widgets/learningExperience/LearningOverview";
import LearningCurriculumTables from "@/src/widgets/learningExperience/LearningCurriculumTables";
import LearningCyclesSkills from "@/src/widgets/learningExperience/LearningCyclesSkills";
import LearningAssessmentCycle from "@/src/widgets/learningExperience/LearningAssessmentCycle";

export default function LearningExperiencePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <LearningBanner />
        <LearningOverview />
        <LearningCurriculumTables />
        <LearningCyclesSkills />
        <LearningAssessmentCycle />
      </main>
      <Footer />
    </div>
  );
}
