import ProgressBar from "./ProgressBar";

interface ProgressElementProps {
  tech: string;
  value: number;
}

const ProgressElement: React.FC<ProgressElementProps> = ({ tech, value }) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 bg-transparent">
      <p className="font-medium text-primary">{tech}</p>
      <div className="w-1/2">
        <ProgressBar value={value} />
      </div>
    </div>
  );
};

export default ProgressElement;
