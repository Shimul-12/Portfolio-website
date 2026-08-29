import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Work from "@/components/Work";
import SecurityLab from "@/components/SecurityLab";
import StackAbout from "@/components/StackAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020303] text-white">
      <div className="noise" />

      <Navbar />

      <Hero />
      <Work />
      <SecurityLab />
      <StackAbout />
      <Contact />
      <Footer />
    </main>
  );
}