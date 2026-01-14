import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ChevronDown } from 'lucide-react';

const ParticleField = lazy(() => import('../ParticleField'));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <ParticleField />
      </Suspense>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
              <span className="pulse-dot" />
              AI-Powered Analytics Platform
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Ascend</span>
            <span className="text-primary glow-text">AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-4 font-light">
            Elevating Student Trajectories
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proactive AI-driven insights for retention and success
          </p>
          
          <motion.button
            className="glow-button px-8 py-4 rounded-xl text-lg font-medium relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Discover Insights
              <motion.span
                className="shimmer absolute inset-0 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
