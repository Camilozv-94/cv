export interface ExperienceRow {
  date: string;
  location: string;
  title: string;
  company: string;
  summary: string;
}

export const ExperienceItem = ({
  date,
  location,
  title,
  company,
  summary,
}: ExperienceRow) => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:flex-row">
      <div className="flex min-w-40 flex-col">
        <h1 className="text-base text-secondary">{date}</h1>
        <p className="text-sm text-tertiary">{location}</p>
      </div>
      <div>
        <h1 className="text-lg font-bold text-primary">{title}</h1>
        <h2 className="text-sm text-tertiary">{company}</h2>
        <p className="text-tertiary">{summary}</p>
      </div>
    </div>
  );
};
