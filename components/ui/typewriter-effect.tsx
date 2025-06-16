"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className = "",
}: {
  words: { text: string }[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <motion.span
              initial={{ opacity: 0 }}
              key={`${word.text}-${idx}`}
              className={className}
            >
              {word.text}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="font-bold">
      <div className="mt-4">
        <div className="text-primary">{renderWords()}</div>
      </div>
    </div>
  );
};