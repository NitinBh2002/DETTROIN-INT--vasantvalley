import LearningBanner from "@/src/widgets/learningExperience/LearningBanner";
import LearningOverview from "@/src/widgets/learningExperience/LearningOverview";
import LearningCurriculumTables from "@/src/widgets/learningExperience/LearningCurriculumTables";
import LearningCyclesSkills from "@/src/widgets/learningExperience/LearningCyclesSkills";
import LearningAssessmentCycle from "@/src/widgets/learningExperience/LearningAssessmentCycle";

export const metadata = {
  title: "The Learning Experience | Vasant Valley School",
  description: "Comprehensive curriculum framework, subject combinations, 8-pillar developmental goals, and assessment cycles.",
};

export default function LearningExperiencePage() {
  return (
    <>
      <LearningBanner />
      <LearningOverview />
      <LearningCurriculumTables />
      <LearningCyclesSkills />
      <LearningAssessmentCycle />
    </>
  );
}
