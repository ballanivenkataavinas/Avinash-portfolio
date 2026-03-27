import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import tryhackmeLogo from "@/assets/tryhackme-logo.png";
import hacktheboxLogo from "@/assets/hackthebox-logo.png";

const labs = [
  {
    name: "TryHackMe",
    image: tryhackmeLogo,
    description: "Hands-on cyber security training through real-world scenarios and guided learning paths.",
    link: "https://tryhackme.com/p/0traceavi1107",
  },
  {
    name: "Hack The Box",
    image: hacktheboxLogo,
    description: "Advanced penetration testing labs with real-world vulnerable machines and challenges.",
    link: "https://account.hackthebox.com/dashboard",
  },
];

const HandsOnLabsSection = () => {
  return (
    <section id="labs" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-primary text-glow-cyan">Hands-on</span>{" "}
            <span className="text-foreground">Labs</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Practical cybersecurity training through real-world platforms and continuous skill validation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="border-border/50 bg-card/80 hover:shadow-[0_12px_40px_hsl(195_100%_40%/0.12)] hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                {/* Platform logo */}
                <div className="h-40 bg-[hsl(220,30%,15%)] flex items-center justify-center p-6">
                  <img
                    src={lab.image}
                    alt={`${lab.name} logo`}
                    className="max-h-24 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {lab.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 gap-2 w-fit"
                  >
                    <a href={lab.link} target="_blank" rel="noopener noreferrer">
                      View Profile
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandsOnLabsSection;
