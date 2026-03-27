import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Labs", href: "#labs" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blogs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-primary font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex items-center gap-2">
  <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
  <span className="text-glow-cyan font-semibold">
    Portfolio
  </span>
</div>
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <motion.a
              key={l.href + l.label}
              href={l.href}
              className="relative text-sm text-muted-foreground hover:text-primary transition-colors py-1 group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.a>
          ))}

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="flex md:hidden items-center gap-2">
          <motion.button
            onClick={toggle}
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
