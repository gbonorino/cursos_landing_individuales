import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseHeroProps {
  course: Course;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ course }) => {
  const trackColors: Record<string, string> = {
    ai: 'bg-purple-100 text-purple-700',
    geo: 'bg-blue-100 text-blue-700',
    data: 'bg-orange-100 text-orange-700',
    water: 'bg-teal-100 text-teal-700',
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('/cream-paper.png')] opacity-40 z-0 mix-blend-multiply"></div>

      {/* Decorative gradient orb */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-rose-100/40 to-stone-100/40 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>
        </motion.div>

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${trackColors[course.track] || 'bg-stone-100 text-stone-700'}`}>
            {course.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
        >
          {course.content?.fullTitle || course.title}
        </motion.h1>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed font-light"
        >
          {course.desc}
        </motion.p>

        {/* Price & details */}
        {course.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 mb-10"
          >
            <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
              🕐 {course.content.duration}
            </span>
            <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
              📚 {course.content.hours}
            </span>
            <span className="bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-sm">
              👨‍🏫 {course.content.instructor}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};
