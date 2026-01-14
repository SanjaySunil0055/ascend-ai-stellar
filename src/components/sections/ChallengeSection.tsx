import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

export default function ChallengeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: TrendingDown, value: "40%", label: "First-year dropout rate at some institutions" },
    { icon: AlertTriangle, value: "$16.5B", label: "Annual cost to US institutions" },
    { icon: Users, value: "3.9M", label: "Students who leave each year without completing" }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            A Crisis in Higher Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Student attrition isn't just a statistic—it's a cascade of missed opportunities, 
            wasted potential, and institutional strain. The dropout problem demands a 
            smarter, more proactive approach.
          </p>
        </AnimatedSection>

        {/* Crossroads Visual */}
        <AnimatedSection delay={0.2} className="flex justify-center mb-20">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full glass-card glow-border flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-primary/20 border-dashed"
              />
              <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32">
                {/* Crossroads paths */}
                <motion.path
                  d="M50 80 L50 20"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M50 50 L20 20"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path
                  d="M50 50 L80 20"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                {/* Student circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                />
              </svg>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={stat.label} 
              delay={0.4 + index * 0.15}
              className="glass-card glow-border glow-border-hover p-8 text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
