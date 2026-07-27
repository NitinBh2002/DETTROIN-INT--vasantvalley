import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import NewsSection from "@/src/widgets/news/NewsSection";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-[#800000] selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
