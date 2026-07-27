import InfraBanner from "@/src/widgets/infrastructure/InfraBanner";
import InfraOverviewGallery from "@/src/widgets/infrastructure/InfraOverviewGallery";
import InfraSpacesSafetyTransport from "@/src/widgets/infrastructure/InfraSpacesSafetyTransport";

export const metadata = {
  title: "Campus & Infrastructure | Vasant Valley School",
  description: "Discover our 8-acre lush green campus, modern STEM laboratories, sports arenas, digital library, and safety infrastructure.",
};

export default function InfrastructurePage() {
  return (
    <>
      <InfraBanner />
      <InfraOverviewGallery />
      <InfraSpacesSafetyTransport />
    </>
  );
}
