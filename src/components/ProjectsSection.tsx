import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Search, ShieldAlert, Lock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";

const projects = [
  {
    icon: Search,
    title: "End-to-End SOC Investigation Simulation",
    problem: "Organizations require real-time detection and investigation of security incidents.",
    approach: "Simulated attack scenarios within a virtual lab environment. Ingested logs into Splunk, created detection queries, analyzed suspicious patterns, and reconstructed attack timelines.",
    tools: ["Kali Linux", "Splunk", "VMware"],
    impact: "Demonstrates practical SOC workflow capability including detection, analysis, and incident investigation.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Radar Dashboard (Nessus)",
    problem: "Unidentified vulnerabilities increase organizational risk exposure.",
    approach: "Conducted vulnerability scanning using Nessus, categorized risks by severity, and visualized findings in a dashboard-style report.",
    tools: ["Nessus", "Linux"],
    impact: "Provides structured vulnerability assessment and risk prioritization methodology.",
  },
  {
    icon: ShieldAlert,
    title: "SSH Brute-Force Detection System",
    problem: "SSH brute-force attacks are common entry vectors in real-world systems.",
    approach: "Simulated brute-force attempts in a controlled environment. Forwarded logs to Splunk and created detection rules to identify malicious IP behavior and trigger alerts.",
    tools: ["Kali Linux", "Splunk", "VMware"],
    impact: "Demonstrates defensive monitoring, alert engineering, and attack pattern detection.",
  },
  {
    icon: Lock,
    title: "Secure FastAPI Backend with Enterprise-Grade Security",
    problem: "Web applications are vulnerable to authentication flaws, privilege escalation, and injection attacks.",
    approach: "Developed a secure FastAPI backend implementing JWT Authentication, Password Hashing, RBAC, Login Rate Limiting, SQL Injection Protection using ORM, PostgreSQL Audit Logging, and Admin Access Monitoring.",
    tools: ["Python", "FastAPI", "PostgreSQL"],
    impact: "Built a secure, production-style backend system following security best practices.",
    liveLink: "https://secure-web-application-architecture.vercel.app/",
  },
];

/** Project card with tilt, lift, and gradient hover border */
const ProjectCard = ({ p, index }: { p: (typeof projects)[number]; index: number }) => {
  const { ref, style, handleMouseMove, handleMouseLeave } = useTiltEffect(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...style, transition: "transform 0.15s ease-out" }}
        className="group"
      >
        {/* Gradient border wrapper */}
        <div className="p-[1px] rounded-xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/40 group-hover:via-accent/20 group-hover:to-primary/40 transition-all duration-500">
          <Card className="border-border/50 bg-card/80 hover:shadow-[0_12px_40px_hsl(195_100%_40%/0.15)] transition-all duration-300 hover:-translate-y-1 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <p.icon className="h-5 w-5 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                {p.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Problem</p>
                <p className="text-muted-foreground">{p.problem}</p>
              </div>
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Approach</p>
                <p className="text-muted-foreground">{p.approach}</p>
              </div>
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs border-primary/30 text-primary/80 hover:scale-105 transition-transform">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">Security Impact</p>
                <p className="text-muted-foreground">{p.impact}</p>
              </div>
              {p.liveLink && (
                <Button
                  asChild
                  size="sm"
                  className="box-glow-cyan gap-2 mt-2"
                >
                  <a href={p.liveLink} target="_blank" rel="noopener noreferrer">
                    Live <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow-cyan">Featured</span>{" "}
          <span className="text-foreground">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
