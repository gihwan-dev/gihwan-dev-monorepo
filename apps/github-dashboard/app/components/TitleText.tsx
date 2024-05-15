"use client";

import { motion } from "framer-motion";

export default function TitleText() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="text-6xl text-blue-400"
    >
      page
    </motion.div>
  );
}
