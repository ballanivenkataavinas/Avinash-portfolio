import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogJWT = () => {
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
            What I Got Wrong About JWT Security
          </h1>
          <p className="text-muted-foreground text-lg">
            Using JWT doesn't automatically make your app secure. I learned that the hard way.
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
            When I first added JWT to my backend, I thought I was done with authentication. Tokens were being generated, protected routes were working, everything looked good. I moved on to other things feeling pretty confident about it.
          </p>
          <p>
            Later I realized that was a mistake. JWT was working, but the way I'd set it up had real problems. The system was functional — just not actually secure.
          </p>
          <p>
            The thing about JWT is that it's just a format. It lets you pass around signed data, and that's useful. But it doesn't handle storage, it doesn't manage permissions, and it doesn't protect you from someone stealing a token. I didn't fully get that at first.
          </p>
          <p>
            Here's an example of what can go wrong. Say a user logs in and gets a JWT, and you store it in localStorage because that's what the tutorial showed you. Now imagine there's a small XSS vulnerability somewhere in your app — maybe from rendering user input without sanitizing it. An attacker injects a script, grabs the token from localStorage, and now they can make requests as that user. The token is valid, the server trusts it, and there's no alarm going off anywhere. That's it. They're in.
          </p>
          <p>
            I also made the mistake of not setting proper expiration on tokens early on. If a token doesn't expire, or expires in like a week, that's a long window for something to go wrong. A leaked token stays useful for way too long.
          </p>
          <p>
            Another thing I overlooked was that authentication and authorization are different problems. JWT handles authentication — it proves who you are. But it doesn't tell the server what you're allowed to do. I had to implement role-based access control separately, and honestly that was where a lot of the real security logic lived.
          </p>
          <p>
            While building my FastAPI backend, I started being more careful about this stuff. I added short expiration times, implemented refresh tokens, set up RBAC so that having a valid token didn't automatically mean you could access everything, and added logging for admin actions and sensitive operations. None of this was complicated on its own, but I wouldn't have thought to do it if I hadn't run into the problems first.
          </p>
          <p>
            The way I think about it now is that JWT is one layer. It's not the whole security system. You still need proper access control, you still need monitoring, and you still need to think about what happens when things go wrong — because they will.
          </p>
          <p>
            I'm not an expert on this. But I've gone from thinking "I'm using JWT so I'm fine" to understanding that security is a bunch of small decisions that add up. And that shift in thinking made my backend a lot more solid.
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

export default BlogJWT;
