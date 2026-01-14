import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, BookOpen, Users, Calendar, Server, ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const dataSources = [
  { icon: BookOpen, label: 'LMS', description: 'Learning Management System' },
  { icon: Users, label: 'HRIS', description: 'HR Information System' },
  { icon: Calendar, label: 'Attendance', description: 'Attendance Systems' },
  { icon: Database, label: 'SIS', description: 'Student Information System' },
];

export default function DataHarmonySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Data Harmony
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Unified Intelligence Hub
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our ETL pipelines seamlessly integrate disparate data sources into a cohesive, 
            analytics-ready data warehouse.
          </p>
        </AnimatedSection>

        {/* Data Flow Visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Data Sources */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {dataSources.map((source, index) => (
              <AnimatedSection 
                key={source.label} 
                delay={0.1 + index * 0.1}
                className="relative"
              >
                <motion.div
                  className="glass-card glow-border glow-border-hover p-6 text-center relative"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <source.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold mb-1">{source.label}</p>
                  <p className="text-muted-foreground text-xs">{source.description}</p>
                  
                  {/* Pulse indicator */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connection Lines SVG */}
          <div className="absolute top-1/2 left-0 right-0 -z-10 hidden md:block">
            <svg className="w-full h-40" viewBox="0 0 800 160" fill="none">
              {[0, 1, 2, 3].map((i) => (
                <motion.path
                  key={i}
                  d={`M${100 + i * 200} 0 Q${100 + i * 200} 80, 400 130`}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                />
              ))}
            </svg>
          </div>

          {/* Central Data Lake */}
          <AnimatedSection delay={0.6} className="flex justify-center">
            <motion.div
              className="glass-card glow-border p-8 md:p-12 text-center relative overflow-hidden"
              animate={isInView ? { 
                boxShadow: [
                  '0 0 30px rgba(129, 140, 248, 0.2)',
                  '0 0 50px rgba(129, 140, 248, 0.3)',
                  '0 0 30px rgba(129, 140, 248, 0.2)'
                ]
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Animated rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-xl border border-primary/20"
                  style={{ 
                    top: ring * 4, 
                    left: ring * 4, 
                    right: ring * 4, 
                    bottom: ring * 4 
                  }}
                  animate={{ 
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: ring * 0.3
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                  <Server className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Unified Data Lake
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  All student touchpoints consolidated into a single source of truth
                </p>
                
                {/* Tech badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['ETL Pipelines', 'Data Warehousing', 'Real-time Sync'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
