import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Eye, User, AlertCircle, BookOpen, Clock, MessageCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const riskDistributionData = [
  { name: 'Low', value: 35, color: '#22c55e' },
  { name: 'Medium', value: 40, color: '#818cf8' },
  { name: 'High', value: 18, color: '#f97316' },
  { name: 'Critical', value: 7, color: '#ef4444' },
];

const shapFactors = [
  { factor: 'Low Course Engagement', impact: 35, icon: BookOpen },
  { factor: 'Missed Deadlines', impact: 28, icon: Clock },
  { factor: 'Low Forum Activity', impact: 22, icon: MessageCircle },
  { factor: 'Negative Sentiment', impact: 15, icon: AlertCircle },
];

export default function InsightNavigatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Insight Navigator
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Explainable Intelligence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Not just predictions—understand exactly why each student is at risk with 
            transparent, actionable insights.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Global Risk Distribution Panel */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card glow-border p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Institutional Risk Distribution</h3>
                  <p className="text-xs text-muted-foreground">Current student population analysis</p>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={riskDistributionData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      width={60}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[0, 4, 4, 0]}
                      animationDuration={1500}
                      animationBegin={isInView ? 0 : 99999}
                    >
                      {riskDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {riskDistributionData.map((item) => (
                  <div key={item.name} className="text-center">
                    <div 
                      className="w-3 h-3 rounded-full mx-auto mb-1"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-muted-foreground">{item.name}</span>
                    <span className="block text-sm font-semibold text-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Individual Student Risk Card */}
          <AnimatedSection delay={0.4}>
            <div className="glass-card glow-border p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sarah Chen</h3>
                    <p className="text-xs text-muted-foreground">Computer Science • Year 2</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-destructive">High</span>
                  <p className="text-xs text-muted-foreground">Risk Level</p>
                </div>
              </div>

              {/* SHAP Values Visualization */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-primary" />
                  Explainable AI (XAI) Factors
                </h4>
                
                <div className="space-y-3">
                  {shapFactors.map((item, i) => (
                    <motion.div
                      key={item.factor}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{item.factor}</span>
                        </div>
                        <span className="text-sm font-medium text-primary">{item.impact}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.impact}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Primary Concern:</span> Sarah's course engagement has 
                  dropped 45% in the last 3 weeks, correlating with missed assignment deadlines.
                </p>
              </div>

              {/* Tech badges */}
              <div className="mt-4 flex gap-2">
                {['Interactive Viz', 'XAI/SHAP'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
