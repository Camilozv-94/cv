import { Card } from "../ui/Card";
import { useTranslations } from "next-intl";

interface BuildCard {
  title: string;
  description: string;
}

const HowIBuildSection = () => {
  const t = useTranslations("HowIBuild");
  const content = t.raw("card") as BuildCard[];

  return (
    <div className="my-10 flex flex-col gap-2 overflow-x-scroll 2xl:overflow-hidden">
      <div className="min-w-7xl">
        <h1 className="mb-2 font-bold text-secondary">{t("title")}</h1>
        <h2 className="text-3xl font-bold text-primary">{t("description")}</h2>
        <p className="text-tertiary">
          A clear methodology that turns ambiguity into a predictable,
          high-quality outcome.
        </p>

        <div className="mt-10 flex flex-row justify-between">
          {content.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowIBuildSection;
