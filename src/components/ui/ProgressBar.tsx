import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

const ProgressBar= ({ value }: ProgressBarProps) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Experience with the technology"
      className="h-4 w-full overflow-hidden rounded-full bg-gray-200 "
    >
      <motion.div
        className="h-full bg-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${clampedValue}%` }}
        transition={{ duration: 0.6, delay: 0.15 }}
      />
    </div>
  );
};

export default ProgressBar;
