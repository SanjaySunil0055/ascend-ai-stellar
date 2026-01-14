import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Users, BookOpen, MessageCircle, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const interventions = [
  {
    icon: Mail,
    title: 'Automated Nudge Email',
    description: 'AI-crafted personalized messages to re-engage students',
    matchScore: 92,
    timing: 'Immediate',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    icon: Users,
    title: 'Advisor Meeting',
    description: 'Schedule a one-on-one session with academic advisor',
    matchScore: 87,
    timing: 'Within 48h',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: BookOpen,
    title: 'Peer Tutoring',
    description: 'Connect with high-performing peers in struggling subjects',
    matchScore: 78,
    timing: 'Next week',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: MessageCircle,
    title: 'Counseling Referral',
    description: 'Mental health support resources and wellness check-in',
    matchScore: 71,
    timing: 'Priority',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Calendar,
    title: 'Study Plan',
    description: 'Customized weekly study schedule with milestones',
    matchScore: 65,
    timing: 'Ongoing',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
];

export default function InterventionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Strategic Interventions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            AI-Powered Action Plans
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our recommender system matches at-risk students with the most effective 
            intervention strategies based on their unique profile.
          </p>
        </AnimatedSection>

        {/* Horizontal Scrolling Cards */}
        <AnimatedSection delay={0.2}>
          <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {interventions.map((intervention, index) => (
                <motion.div
                  key={intervention.title}
                  className="w-80 flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="glass-card glow-border h-full p-6 relative overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${intervention.gradient} opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <intervention.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{intervention.matchScore}%</span>
                          <p className="text-xs text-muted-foreground">Match</p>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {intervention.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {intervention.description}
                      </p>

                      {/* Timing Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground">
                          {intervention.timing}
                        </span>
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Generate Plan Button */}
        <AnimatedSection delay={0.8} className="mt-12 text-center">
          <motion.button
            className="glow-button px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span>Generate Personalized Plan</span>
            <motion.span
              className="shimmer absolute inset-0 rounded-xl opacity-50"
            />
          </motion.button>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['Recommender Systems', 'Workflow Automation', 'Personalization'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
