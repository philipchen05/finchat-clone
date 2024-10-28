import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Partners from "../components/partners"
import Notifications from "../components/notifications"
import Data from "../components/data"
import Assistant from "../components/assistant"
import Customize from "../components/customize"

export default function Home() {
  return (
    <main className="bg-customWhite h-[4000px]">
      <Navbar />
      <Hero />
      <Partners />
      <Notifications />
      <Data />
      <Assistant />
      <Customize />
    </main>
  );
}
