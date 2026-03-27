import { motion } from "framer-motion";

/**
 * Subtle animated gradient blobs in the background
 * Uses transform/opacity for 60fps performance
 */
const BackgroundBlobs = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]"
      animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]"
      animate={{ x: [0, -40, 30, 0], y: [0, 30, -50, 0], scale: [1, 0.9, 1.1, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[50%] left-[50%] w-[350px] h-[350px] rounded-full bg-primary/[0.02] blur-[80px]"
      animate={{ x: [0, 60, -20, 0], y: [0, -30, 40, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default BackgroundBlobs;
