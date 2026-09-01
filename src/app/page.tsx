import AboutMe from "@/components/sections/AboutMe";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import HowIBuild from "@/components/sections/HowIBuildSection";
import StackSection from "@/components/sections/StackSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 m-8">
      <HomeSection />
      <HowIBuild />
      <StackSection />
      <ExperienceSection />
      <AboutMe />
    </div>
  );
}
