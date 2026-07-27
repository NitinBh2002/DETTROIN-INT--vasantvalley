import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Admissions from "@/src/widgets/Admissions/Admissions";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
