import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const links = [
  { icon: Mail, label: "avinas1107@gmail.com", href: "mailto:avinas1107@gmail.com" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ballani-avinash" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/ballanivenkataavinas" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-glow-cyan">Get In</span>{" "}
          <span className="text-foreground">Touch</span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <MagneticButton>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto border-border/50 hover:border-primary/30 hover:box-glow-cyan hover:-translate-y-1 hover:shadow-[0_8px_25px_hsl(195_100%_40%/0.15)] gap-2 transition-all duration-300"
                >
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    <l.icon className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{l.label}</span>
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-24 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>© 2026 Ballani Venkata Avinas. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
