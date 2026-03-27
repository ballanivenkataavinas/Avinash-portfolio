import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  { name: "CompTIA Security+", status: "Planned" },
  { name: "Certified Ethical Hacker (CEH)", status: "Sep 2026" },
  { name: "Offensive Security Certified Professional (OSCP)", status: "Long-term" },
];

const advancing = [
  { name: "Offensive Security Techniques", percent: 65 },
  { name: "Blue Team Operations", percent: 55 },
  { name: "Advanced SOC Monitoring", percent: 70 },
  { name: "Vulnerability Research", percent: 45 },
];

const ProgressBar = ({ name, percent, delay }: { name: string; percent: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{percent}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--primary)))",
            boxShadow: inView ? "0 0 8px hsl(var(--primary) / 0.4)" : "none",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow-cyan">Certifications & Progress</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Currently Advancing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Currently Advancing</h3>
            <div className="space-y-4">
              {advancing.map((item, i) => (
                <ProgressBar
                  key={item.name}
                  name={item.name}
                  percent={item.percent}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5">Certifications</h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-lg border border-border/50 bg-background/50 p-4 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{cert.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;