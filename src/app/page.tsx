import HomeSection from "@/components/sections/HomeSection";
import HowIBuild from "@/components/sections/HowIBuildSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 m-8">
      <HomeSection />
      <HowIBuild />
    </div>
  );
}
