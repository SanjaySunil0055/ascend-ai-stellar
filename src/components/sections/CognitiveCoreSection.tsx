import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Brain, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

export default function CognitiveCoreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [riskScore, setRiskScore] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setRiskScore(prev => {
            if (prev >= 78) {
              clearInterval(interval);
              return 78;
            }
            return prev + 2;
          });
        }, 30);
        return () => clearInterval(interval);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const neuronNodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 50 + Math.cos(i * Math.PI / 6) * 35,
    y: 50 + Math.sin(i * Math.PI / 6) * 35,
  }));

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Cognitive Core
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Predictive Intelligence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced machine learning models analyze patterns and predict student outcomes 
            before they become statistics.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Neural Network Visualization */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card glow-border p-8 relative overflow-hidden">
              <div className="aspect-square relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Connection lines */}
                  {neuronNodes.map((node, i) => 
                    neuronNodes.slice(i + 1).map((target, j) => (
                      <motion.line
                        key={`${i}-${j}`}
                        x1={node.x}
                        y1={node.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.1 * i }}
                      />
                    ))
                  )}
                  
                  {/* Center node */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="8"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  
                  {/* Outer nodes */}
                  {neuronNodes.map((node, i) => (
                    <motion.circle
                      key={node.id}
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill="hsl(var(--primary))"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 0.7 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i + 0.5 }}
                    />
                  ))}

                  {/* Pulse effect */}
                  {isInView && (
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="15"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </svg>

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground">ML Model</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Risk Score & NLP Analysis */}
          <div className="space-y-6">
            {/* Risk Score Card */}
            <AnimatedSection delay={0.3}>
              <div className="glass-card glow-border glow-border-hover p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Risk Probability</h3>
                      <p className="text-xs text-muted-foreground">Real-time prediction score</p>
                    </div>
                  </div>
                  <Zap className="w-5 h-5 text-primary animate-pulse" />
                </div>
                
                <div className="flex items-end gap-4">
                  <span className="text-5xl font-bold text-primary glow-text">{riskScore}%</span>
                  <span className="text-muted-foreground text-sm mb-2">probability of dropout</span>
                </div>
                
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${riskScore}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* NLP Analysis */}
            <AnimatedSection delay={0.5}>
              <div className="glass-card glow-border glow-border-hover p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">NLP Sentiment Analysis</h3>
                    <p className="text-xs text-muted-foreground">Survey response insights</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { sentiment: 'Frustration Detected', score: 65, color: 'destructive' },
                    { sentiment: 'Disengagement Signals', score: 48, color: 'primary' },
                    { sentiment: 'Support Needed', score: 72, color: 'primary' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.sentiment}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <span className="text-sm text-muted-foreground">{item.sentiment}</span>
                      <span className={`text-sm font-medium ${item.color === 'destructive' ? 'text-destructive' : 'text-primary'}`}>
                        {item.score}%
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    "I feel overwhelmed with the coursework and don't know who to ask for help..."
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Tech badges */}
            <AnimatedSection delay={0.6}>
              <div className="flex flex-wrap gap-2">
                {['Supervised Learning', 'Classification', 'NLP', 'Sentiment Analysis'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
