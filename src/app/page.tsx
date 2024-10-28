import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Partners from "../components/partners"
import Notifications from "../components/notifications"
import Data from "../components/data"

export default function Home() {
  return (
    <main className="bg-customWhite h-max">
      <Navbar />
      <Hero />
      <Partners />
      <Notifications />
      <Data />
    </main>
  );
}
