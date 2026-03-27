import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import profilePhoto from "@/assets/profile-edited.png";

/** Stagger children for text reveal */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating profile photo */}
        <motion.div
          className="flex justify-center mb-8"
          variants={itemVariants}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Avatar className="h-40 w-40 border-2 border-primary/40 box-glow-cyan hover:scale-110 transition-transform duration-500">
            <AvatarImage src={profilePhoto} alt="Ballani Venkata Avinas" className="object-cover" />
            <AvatarFallback className="bg-secondary text-primary text-3xl font-bold">BVA</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Text reveal animations */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight"
          variants={itemVariants}
        >
          <span className="text-glow-cyan text-primary">Ballani Venkata Avinas</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-primary/80 font-mono mb-4"
          variants={itemVariants}
        >
          Cybersecurity Analyst | SOC Enthusiast | Offensive & Defensive Security
        </motion.p>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-6 italic"
          variants={itemVariants}
        >
          Securing Systems. Detecting Threats. Engineering Trust.
        </motion.p>

        <motion.p
          className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Cybersecurity Engineer focused on Real-World Attack Simulation &amp; Defense Systems
        </motion.p>

        <motion.p
          className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Open to internships and entry-level roles in Cybersecurity (SOC / Security Engineering / Penetration Testing)
        </motion.p>

        {/* CTA buttons with magnetic + glow lift */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <MagneticButton>
            <Button asChild size="lg" className="box-glow-cyan font-semibold px-8 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(195_100%_40%/0.35)] transition-all duration-300">
              <a href="#projects">View Projects</a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 hover:-translate-y-1 transition-all duration-300 gap-2">
              <a href="/resume.pdf" download="Ballani_Venkata_Avinas_Resume.pdf">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
