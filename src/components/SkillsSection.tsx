import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Database, Brain, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const categories = [
  { title: "Security Tools", icon: Shield, skills: ["Kali Linux", "Nessus", "Splunk", "Nmap", "Wireshark", "Burp Suite"] },
  { title: "Backend & Secure Dev", icon: Code, skills: ["Python", "FastAPI", "JWT Auth", "RBAC", "Rate Limiting", "REST API Security"] },
  { title: "Database Security", icon: Database, skills: ["PostgreSQL", "Audit Logging", "Timezone-Aware Logging", "Secure ORM Queries"] },
  { title: "Cybersecurity Concepts", icon: Brain, skills: ["SOC Monitoring", "Incident Response", "Brute-Force Detection", "Log Analysis", "OWASP Top 10", "Vulnerability Assessment", "Attack Simulation"] },
  { title: "Virtualization", icon: Monitor, skills: ["VMware Lab Environment"] },
];

/** Tiltable skill card with hover glow */
const SkillCard = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, style, handleMouseMove, handleMouseLeave } = useTiltEffect(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...style, transition: "transform 0.15s ease-out" }}
      >
        <Card className="border-border/50 bg-card/50 hover:box-glow-cyan transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 group">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              {/* Icon with hover scale + rotate + glow */}
              <cat.icon className="h-4 w-4 text-primary group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_6px_hsl(195,100%,40%)] transition-all duration-300" />
              {cat.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all cursor-default text-xs"
              >
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow-cyan">Technical</span>{" "}
          <span className="text-foreground">Skills</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
