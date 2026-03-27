import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    slug: "soc-lab-analyst-thinking",
    title: "Building a SOC Lab is Easy — Thinking Like an Analyst is Hard",
    description:
      "I set up a SOC lab that worked, but I didn't really know how to analyze what I was seeing at first.",
    meta: "3 min read · Based on lab experience",
    tags: ["SOC", "Splunk", "Blue Team"],
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    slug: "jwt-authentication-security",
    title: "JWT Authentication is Not Secure by Default — Here's Why",
    description:
      "I thought adding JWT was enough for security, but I later found out where things actually break.",
    meta: "3 min read · Based on lab experience",
    tags: ["JWT", "API Security", "Backend"],
    icon: <Shield className="h-5 w-5" />,
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-primary text-glow-cyan">Security</span>{" "}
            <span className="text-foreground">Blog</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Insights, breakdowns, and lessons from real-world cybersecurity practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="border-border/50 bg-card/80 hover:shadow-[0_12px_40px_hsl(195_100%_40%/0.12)] hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 text-primary">
                    {blog.icon}
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {blog.title}
                      </h3>
                      <span className="text-xs text-muted-foreground/60 mt-1 block">
                        {blog.meta}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 gap-2 w-fit mt-2"
                  >
                    <Link to={`/blog/${blog.slug}`}>
                      Read Blog
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
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

export default BlogSection;
