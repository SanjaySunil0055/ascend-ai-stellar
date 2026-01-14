import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Target, Shield, ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}: { 
  value: number; 
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endValue = value;
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setCount(Math.round(easeProgress * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const metrics = [
  { 
    icon: TrendingUp, 
    value: 34, 
    suffix: '%', 
    label: 'Increased Retention Rate',
    description: 'Average improvement across partner institutions'
  },
  { 
    icon: Target, 
    value: 89, 
    suffix: '%', 
    label: 'Early Detection Rate',
    description: 'At-risk students identified before critical point'
  },
  { 
    icon: Shield, 
    value: 3.2, 
    suffix: 'x', 
    label: 'ROI Multiplier',
    description: 'Return on investment within first year'
  },
];

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Impact & Evolution
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Measurable Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming student outcomes with data-driven precision. 
            Every prediction is an opportunity to change a trajectory.
          </p>
        </AnimatedSection>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <AnimatedSection 
              key={metric.label} 
              delay={0.2 + index * 0.15}
            >
              <motion.div
                className="glass-card glow-border glow-border-hover p-8 text-center relative overflow-hidden group"
                whileHover={{ y: -4 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <metric.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <p className="text-5xl md:text-6xl font-bold text-primary glow-text mb-2">
                    <AnimatedCounter 
                      value={metric.value} 
                      suffix={metric.suffix}
                    />
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {metric.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.6} className="text-center">
          <div className="glass-card glow-border p-12 max-w-3xl mx-auto relative overflow-hidden">
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(129, 140, 248, 0.1)',
                  '0 0 60px rgba(129, 140, 248, 0.2)',
                  '0 0 30px rgba(129, 140, 248, 0.1)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border border-primary/30 border-dashed mx-auto mb-6 flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join the Future of Education
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Partner with AscendAI to transform how your institution supports student success. 
                The future is proactive, not reactive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium inline-flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="glow-button px-8 py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.8} className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 AscendAI. Elevating educational outcomes through intelligent analytics.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
