import HeroSection from "@/components/HeroSection";
import MissionVision from "@/components/Mission-Vision";
import Navbar from "@/components/Navbar";
import { OrbitingCirclesBodies } from "@/components/OrbitingCircles";
import ServiceGrid from "@/components/ServiceGrid";

export default function Home() {
  return (
<div>
  <Navbar/>
  <HeroSection/>
  <ServiceGrid/>
  <OrbitingCirclesBodies/>
  <MissionVision/>
</div>
  );
}
