import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import InfraBanner from "@/src/widgets/infrastructure/InfraBanner";
import InfraOverviewGallery from "@/src/widgets/infrastructure/InfraOverviewGallery";
import InfraSpacesSafetyTransport from "@/src/widgets/infrastructure/InfraSpacesSafetyTransport";

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <InfraBanner />
        <InfraOverviewGallery />
        <InfraSpacesSafetyTransport />
      </main>
      <Footer />
    </div>
  );
}
