import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Monitor, Award, CheckCircle } from 'lucide-react';
import { CourseContent as CourseContentType } from '../types';

interface CourseContentProps {
  content: CourseContentType;
}

export const CourseContent: React.FC<CourseContentProps> = ({ content }) => {
  return (
    <section className="py-20 bg-stone-50 relative">
      <div className="max-w-5xl mx-auto px-6">

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Sobre el curso</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            {content.description}
          </p>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="paper-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-serif font-bold text-slate-900">Destinatarios</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{content.audience}</p>
          </div>

          <div className="paper-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-serif font-bold text-slate-900">Modalidad</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{content.modality}</p>
          </div>

          {content.requirements && (
            <div className="paper-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-serif font-bold text-slate-900">Requerimientos</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{content.requirements}</p>
            </div>
          )}

          {content.evaluation && (
            <div className="paper-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-slate-900">Evaluación y certificación</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{content.evaluation}</p>
            </div>
          )}
        </motion.div>

        {/* Modules / Syllabus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">Programa del curso</h2>
          <div className="space-y-4">
            {content.modules.map((mod, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="paper-card rounded-2xl overflow-hidden group"
              >
                <summary className="flex items-center gap-4 p-5 cursor-pointer select-none hover:bg-stone-50 transition-colors">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="font-serif font-bold text-slate-900 text-lg">{mod.title}</span>
                </summary>
                <div className="px-5 pb-5 pt-0 ml-14">
                  <ul className="space-y-2">
                    {mod.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
