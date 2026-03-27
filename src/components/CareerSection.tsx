import { Target } from "lucide-react";
import { motion } from "framer-motion";

const CareerSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Target className="h-8 w-8 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary text-glow-cyan">Career</span>{" "}
            <span className="text-foreground">Objective</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Seeking internship or entry-level opportunities in Cybersecurity
            <span className="text-foreground"> (SOC Analyst / Security Engineer / Penetration Tester) </span>
            where I can apply practical security skills to protect and strengthen real-world systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
