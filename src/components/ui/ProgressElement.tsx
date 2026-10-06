import ProgressBar from "./ProgressBar";

interface ProgressElementProps {
  tech: string;
  value: number;
  aria?: string;
}

const ProgressElement = ({ tech, value, aria }:ProgressElementProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 bg-transparent">
      <p className="font-medium text-primary">{tech}</p>
      <div className="w-1/2">
        <ProgressBar value={value} aria={aria} />
      </div>
    </div>
  );
};

export default ProgressElement;
