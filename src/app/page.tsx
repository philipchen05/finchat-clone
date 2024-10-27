import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Partners from "../components/partners"

export default function Home() {
  return (
    <main className="bg-customWhite h-screen">
      <Navbar />
      <Hero />
      <Partners />
    </main>
  );
}
