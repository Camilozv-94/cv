import { useTranslations } from "next-intl";
import LinkIcon from "../ui/LinkIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";


const LetsTalkSection = () => {
  const t = useTranslations("LetsTalk");
  return (
    <div className="flex flex-col gap-2" id="LetsTalk">
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="section-label">{t("title")}</h1>
        <h2 className="section-title">{t("sub-title")}</h2>
        <p className="section-description">{t("introduction")}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-primary">{t("description-title")}</p>
        <p className="section-description">{t("description")}</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{t("contact")}</h3>
        <div className="mt-4 flex flex-row gap-2">
          <LinkIcon url="https://linkedin.com/in/camilo-zuluaga-velasquez" variant="outline" title={<LinkedinIcon size="md" color="var(--primary)" />} />
          <LinkIcon url="mailto:hello@camilozuluaga.dev" variant="outline" title={<MailIcon size="md" color="var(--primary)" />} />
        </div>
      </div>
    </div>
  );
};

export default LetsTalkSection;
