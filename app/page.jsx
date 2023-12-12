import Download from "./components/Download";
import Homehero from "./components/Homehero";
import Posts from "./components/Posts";
import Providers from "./components/Providers";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Homehero />
      <Services />
      <Providers />
      <Download />
      <Testimonials />
      <Posts />
    </main>
  );
}
