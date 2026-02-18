import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { COURSES } from '../constants';
import { CourseHero } from './CourseHero';
import { CourseContent } from './CourseContent';
import { PricingTable } from './PricingTable';
import { ScrollToTop } from './ScrollToTop';
import { Button } from './Button';

export const CoursePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES.find(c => c.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Curso no encontrado</h1>
        <p className="text-slate-500 mb-8">El curso que buscas no existe o fue movido.</p>
        <Link to="/">
          <Button>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al catálogo
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <CourseHero course={course} />

      {course.content ? (
        <CourseContent content={course.content} />
      ) : (
        /* Fallback for courses without detailed content */
        <section className="py-20 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="paper-card rounded-2xl p-10"
            >
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Sobre el curso</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{course.desc}</p>
              <a href={course.externalLink} target="_blank" rel="noopener noreferrer">
                <Button>
                  Ver detalles completos en Centro REDES
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-stone-100/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Volver al catálogo — arriba del encabezado */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 w-5 h-5 text-slate-400" />
                Volver al catálogo
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
              ¿Listo para inscribirte?
            </h2>
            <p className="text-slate-500 mb-10">Inscribite ahora y empezá tu formación.</p>

            {course.pricing ? (
              <PricingTable price={course.price} pricing={course.pricing} />
            ) : (
              <a href={course.externalLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Inscribirme ahora
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
};
