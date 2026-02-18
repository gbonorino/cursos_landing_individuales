import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Flame } from 'lucide-react';
import { COURSES, FILTERS } from '../constants';
import { FilterType, Course } from '../types';
import { ShareModal } from './ShareModal';
import sessionData from '../sessions.json';

export const CourseCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [shareModalData, setShareModalData] = useState<{ isOpen: boolean; course: Course | null }>({
    isOpen: false,
    course: null
  });

  const isInCurrentSession = (courseId: number): boolean => {
    return sessionData.currentSession.courseIds.includes(courseId);
  };

  const filteredCourses = useMemo(() => {
    if (activeFilter === 'all') return COURSES;
    return COURSES.filter(course => course.track === activeFilter);
  }, [activeFilter]);

  const openShareModal = (course: Course) => {
    setShareModalData({ isOpen: true, course });
  };

  const closeShareModal = () => {
    setShareModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="catalog" className="py-24 bg-stone-100/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Session Banner */}
        {sessionData.showBanner && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white">{sessionData.currentSession.name}</h3>
            </div>
            <p className="text-white text-lg mb-3">{sessionData.announcement}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <span>📅 {new Date(sessionData.currentSession.startDate + 'T00:00:00').toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })} - {new Date(sessionData.currentSession.endDate + 'T00:00:00').toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Catálogo de Formación</h2>
             <p className="text-slate-500 max-w-lg">Cursos diseñados para profesionales que buscan rigor científico y herramientas de vanguardia.</p>
          </div>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-stone-50 border border-transparent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="paper-card rounded-2xl p-6 flex flex-col justify-between h-full bg-white group cursor-default min-h-[340px] hover:shadow-2xl hover:shadow-stone-200/50"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wider uppercase ${
                      course.track === 'ai' ? 'bg-purple-100 text-purple-700' :
                      course.track === 'geo' ? 'bg-blue-100 text-blue-700' :
                      course.track === 'data' ? 'bg-orange-100 text-orange-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {course.category}
                    </span>
                  </div>
                  
                  {/* Session Badge */}
                  {isInCurrentSession(course.id) && (
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                        <Flame className="w-3.5 h-3.5" />
                        {sessionData.currentSession.name}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 leading-snug">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {course.desc}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Valor</span>
                    <span className="text-lg font-bold text-slate-900">{course.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => openShareModal(course)}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all duration-300"
                      aria-label="Compartir curso"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <Link to={`/curso/${course.slug}`} className="block">
                       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
                          <ArrowRight className="w-5 h-5" />
                       </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-200 mt-8">
            <p className="text-slate-400 font-serif text-lg italic">No se encontraron cursos en esta categoría.</p>
          </div>
        )}
      </div>

      {/* Share Modal */}
      {shareModalData.course && (
        <ShareModal 
          isOpen={shareModalData.isOpen} 
          onClose={closeShareModal} 
          courseTitle={shareModalData.course.title} 
          courseLink={shareModalData.course.externalLink} 
        />
      )}
    </section>
  );
};