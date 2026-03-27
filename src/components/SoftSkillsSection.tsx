import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const softSkills = [
  "Security Mindset",
  "Learning Agility",
  "Time Management",
  "Team Collaboration",
];

const SoftSkillsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-primary text-glow-cyan">Soft</span>{" "}
            <span className="text-foreground">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="border-accent/30 text-accent/80 hover:bg-accent/10 hover:text-accent hover:scale-110 hover:-translate-y-0.5 transition-all cursor-default text-sm px-4 py-1.5"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
