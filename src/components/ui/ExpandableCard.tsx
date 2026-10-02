"use client";
import { useMediaQuery } from "usehooks-ts";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressElement from "./ProgressElement";

export interface Element {
  tech: string;
  percentage: number;
}

interface ExpandableCardProps {
  title: string;
  elements: Element[];
}

const variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

const transition = { duration: 0.3, ease: "easeInOut" } as const;

const ExpandableCard = ({ title, elements }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 768px)");

  const techSummary = useMemo(
    () => elements.map((element) => element.tech).join(", "),
    [elements],
  );

  const handleMouseEnter = () => {
    if (isNotMobile) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (isNotMobile) setIsExpanded(false);
  };

  const handleTapStart = () => {
    if (!isNotMobile) setIsExpanded((prev) => !prev);
  };

  const handleTapCancel = () => {
    if (!isNotMobile) setIsExpanded(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTapStart={handleTapStart}
      onTapCancel={handleTapCancel}
      className="flex flex-col gap-2 overflow-hidden rounded-xl bg-secondary-background p-6 transition-all duration-300"
    >
      <h2 className="mb-2 font-bold text-secondary">{title}</h2>

      <AnimatePresence mode="wait" initial={false}>
        {!isExpanded ? (
          <motion.p
            key="summary-text"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="truncate text-primary"
          >
            {techSummary}
          </motion.p>
        ) : (
          <motion.div
            key="progress-list"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="flex flex-col gap-2"
          >
            {elements.map((element) => (
              <ProgressElement
                key={element.tech}
                tech={element.tech}
                value={element.percentage}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableCard;
