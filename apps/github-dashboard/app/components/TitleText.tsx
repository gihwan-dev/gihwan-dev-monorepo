"use client";

import { motion } from "framer-motion";

export default function TitleText() {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      className="text-6xl text-blue-400"
      exit={{
        opacity: 0,
      }}
      initial={{
        opacity: 0,
      }}
    >
      page
    </motion.div>
  );
}
