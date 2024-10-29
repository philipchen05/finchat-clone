import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Partners from "../components/partners"
import Features from "../components/features"
import Testimonials from "../components/testimonials"
import Information from "../components/information"
import Start from "../components/start"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="bg-customWhite">
      <Navbar />
      <Hero />
      <Partners />
      <div className="flex justify-center overflow-hidden">
        <Features />
      </div>
      <Testimonials />
      <Information />
      <div className="flex justify-center">
        <Start />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </main>
  );
}
