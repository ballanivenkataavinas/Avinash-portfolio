import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow-cyan">About</span>{" "}
          <span className="text-foreground">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          {/* Text with staggered fade-in */}
          <motion.div
            className="space-y-5 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am a 3rd Year B.Tech Computer Science Engineering student specializing in Cybersecurity at Lovely Professional University. I focus on both offensive and defensive security, combining secure development practices with real-world attack simulation.
            </p>
            <p>
              I design and build secure backend systems using FastAPI, implementing JWT authentication, Role-Based Access Control (RBAC), and strong API security practices.
            </p>
            <p>
              I actively simulate cyberattacks in controlled lab environments and perform vulnerability assessments using industry-standard tools. My hands-on experience includes SOC investigation simulations, SSH brute-force attack detection using Splunk, Nessus-based vulnerability scanning, and implementing secure PostgreSQL audit logging systems.
            </p>
            <p>
              I am passionate about building secure, scalable applications and continuously improving my practical cybersecurity skills through real-world projects and labs.
            </p>
          </motion.div>

          {/* Terminal with slide-in + hover zoom */}
          <motion.div
            className="hidden md:block w-72 rounded-lg border border-border bg-[hsl(220,20%,12%)] p-4 font-mono text-xs hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span className="text-gray-300">terminal</span>
            </div>
            <div className="space-y-1 text-gray-400">
              <p><span className="text-cyan-400">$</span> whoami</p>
              <p className="text-gray-200">security_engineer</p>
              <p><span className="text-cyan-400">$</span> cat skills.txt</p>
              <p className="text-green-400">offensive | defensive | SOC</p>
              <p><span className="text-cyan-400">$</span> uptime</p>
              <p className="text-gray-200">3 years and counting_</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
