import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020303] text-white">
      <div className="noise" />

      <Navbar />

      <Hero />

      <section id="work" className="min-h-screen" />
      <section id="security" className="min-h-screen" />
      <section id="stack" className="min-h-screen" />
      <section id="about" className="min-h-screen" />
    </main>
  );
}