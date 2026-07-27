import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CambridgeBanner from "@/src/widgets/internationalCurriculum/CambridgeBanner";
import CambridgeOverview from "@/src/widgets/internationalCurriculum/CambridgeOverview";
import CambridgeAttributesFoundation from "@/src/widgets/internationalCurriculum/CambridgeAttributesFoundation";
import CambridgeIGCSE from "@/src/widgets/internationalCurriculum/CambridgeIGCSE";
import CambridgeAdvancedALevels from "@/src/widgets/internationalCurriculum/CambridgeAdvancedALevels";

export default function InternationalCurriculumPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <CambridgeBanner />
        <CambridgeOverview />
        <CambridgeAttributesFoundation />
        <CambridgeIGCSE />
        <CambridgeAdvancedALevels />
      </main>
      <Footer />
    </div>
  );
}
