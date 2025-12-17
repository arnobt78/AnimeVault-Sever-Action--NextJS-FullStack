// Motion Component - Wrapper for Framer Motion animations
// "use client" required because framer-motion uses client-side features
"use client";

import { motion } from "framer-motion";

// Export a motion-enabled div component
// This allows us to use Framer Motion animations on div elements
// Usage: <MotionDiv variants={...} initial="..." animate="...">...</MotionDiv>
export const MotionDiv = motion.div;
