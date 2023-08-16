"use client";
import React from "react";
import "@/app/globals.css";
import { motion, useScroll } from "framer-motion";
const ScrollBarTracker = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
  );
};

export default ScrollBarTracker;
