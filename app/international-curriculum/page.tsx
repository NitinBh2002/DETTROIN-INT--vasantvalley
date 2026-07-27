import CambridgeBanner from "@/src/widgets/internationalCurriculum/CambridgeBanner";
import CambridgeOverview from "@/src/widgets/internationalCurriculum/CambridgeOverview";
import CambridgeAttributesFoundation from "@/src/widgets/internationalCurriculum/CambridgeAttributesFoundation";
import CambridgeIGCSE from "@/src/widgets/internationalCurriculum/CambridgeIGCSE";
import CambridgeAdvancedALevels from "@/src/widgets/internationalCurriculum/CambridgeAdvancedALevels";

export const metadata = {
  title: "International Cambridge Curriculum | Vasant Valley School",
  description: "Cambridge International Education pathway from Lower Secondary, IGCSE to AS & A Levels at Vasant Valley School.",
};

export default function InternationalCurriculumPage() {
  return (
    <>
      <CambridgeBanner />
      <CambridgeOverview />
      <CambridgeAttributesFoundation />
      <CambridgeIGCSE />
      <CambridgeAdvancedALevels />
    </>
  );
}
