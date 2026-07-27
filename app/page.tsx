import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
      </main>
      <Footer />
    </div>
  );
}
