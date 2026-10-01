import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import HowIBuildSection from "@/components/sections/HowIBuildSection";
import LetsTalkSection from "@/components/sections/LetsTalkSection";
import StackSection from "@/components/sections/StackSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <HomeSection />
      <HowIBuildSection />
      <StackSection />
      <ExperienceSection />
      <AboutMeSection />
      <LetsTalkSection />
    </div>
  );
}
