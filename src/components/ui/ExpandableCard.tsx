"use client";
import { useMediaQuery } from "usehooks-ts";
import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface ExpandableCardProps {
  title: string;
  collapsedContent: ReactNode;
  expandedContent:ReactNode;
}

const variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

const transition = { duration: 0.3, ease: "easeInOut" } as const;

const ExpandableCard = ({ title, collapsedContent, expandedContent }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 768px)");


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
            {collapsedContent}
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
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableCard;
