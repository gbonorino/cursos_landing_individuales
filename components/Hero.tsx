import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/cream-paper.png')] opacity-40 z-0 mix-blend-multiply"></div>
      
      {/* Decorative gradient orb (Subtle) */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-rose-100/40 to-stone-100/40 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-slate-600 text-sm font-medium tracking-wide"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          Inscripciones Abiertas 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight"
        >
          50 Años de Ciencia. <br />
          <span className="italic text-rose-500">Potenciados por la IA.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Aprende metodología científica moderna con el <strong className="text-slate-900 font-semibold">Dr. Gustavo González Bonorino</strong>. Cursos oficiales acreditados por el <span className="font-semibold text-slate-800">Centro REDES (CONICET)</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Button size="lg" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar Cursos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })}>
            Leer Trayectoria
            <BookOpen className="ml-2 w-5 h-5 text-slate-400" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};