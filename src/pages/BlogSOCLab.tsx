import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogSOCLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Button asChild variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-primary gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            What I Actually Learned from Building a SOC Lab
          </h1>
          <p className="text-muted-foreground text-lg">
            It wasn't what I expected.
          </p>
        </motion.div>

        <motion.div
          className="space-y-5 text-foreground/80 leading-relaxed text-[0.95rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p>
            I set up a SOC lab a while back — Splunk, some log sources, a couple of detection rules. Everything was working. Logs were coming in, dashboards looked good, alerts were firing. I felt like I was making progress.
          </p>
          <p>
            But then I sat down and actually tried to analyze something, and I realized I had no idea what I was doing. The tools were running fine. I just didn't know how to think about what they were showing me.
          </p>
          <p>
            At first I thought the whole point of a SOC lab was getting everything set up — connecting the right sources, writing rules, making dashboards look nice. And yeah, that's part of it. But it's the easy part. The hard part is looking at an alert and figuring out if it actually matters.
          </p>
          <p>
            I used to see an alert in Splunk and assume it was important just because it triggered. That's not how it works. Most alerts are noise. Some real threats don't even trigger alerts at all. That was a frustrating thing to learn.
          </p>
          <p>
            There was one moment that kind of changed how I think about it. I saw a log where a user failed login five times and then succeeded. My first thought was "oh, someone forgot their password." But then I started wondering — was the IP normal? Had this happened before? Were other accounts seeing the same pattern? Suddenly it didn't look so harmless anymore. It could've been a brute-force that actually worked.
          </p>
          <p>
            That's when I started asking different questions. Instead of just reading logs, I'd try to figure out what happened before and after an event. Is this normal for this user? Is this pattern showing up elsewhere? It's a small change, but it made a huge difference.
          </p>
          <p>
            I made a lot of mistakes early on. I trusted alerts without thinking about them. I focused too much on tools and not enough on context. I'd ignore small anomalies because they didn't look "dramatic" enough. And I got overwhelmed by noise constantly — there's just so much data, and most of it doesn't mean anything on its own.
          </p>
          <p>
            Over time I got a bit better at filtering things out and focusing on what actually looked off. I moved from simple rule-based thinking — like "five failed logins equals alert" — to something more like "is this login pattern weird for this specific system?" It's not a perfect process, and I'm still learning, but it feels a lot more useful than just watching dashboards.
          </p>
          <p>
            The biggest thing I took away from all of this is that SOC work is less about the tools and more about how you think. It's closer to detective work than IT work, honestly. You're not just watching screens — you're trying to connect small clues and figure out what's going on.
          </p>
          <p>
            I'm still working on it. But at least now I know that setting up the lab was just the starting point, not the skill itself.
          </p>
        </motion.div>

        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSOCLab;
