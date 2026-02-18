import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "El curso es excelente, muy completo y el Facilitador es un genio y te ayuda un montón a esclarecer las dudas. Lo único que me pareció un poco corto para la cantidad de contenido.",
    author: "Encuesta Centro REDES",
    curso: "SIG y satélites en la agricultura de precisión",
    satisfacción: "89%"
  },
  {
    id: 2,
    quote: "El curso cumplió todas mis expectativas, de hecho era más complejo de lo que pensé.",
    author: "Encuesta Centro REDES",
    curso: "Hidrología con HEC-HMS",
    satisfacción: "100%"
  },
  {
    id: 3,
    quote: "Una actualización necesaria para cualquier profesional de las Ciencias de la Tierra.",
    author: "Encuesta Centro REDES",
    curso: "Google Earth Engine",
    satisfacción: "92%"
  },
  {
    id: 4,
    quote: "Creo que es un curso muy interesante y lo abordado superó mis expectativas.",
    author: "Encuesta Centro REDES",
    curso: "Programación con Python",
    satisfacción: "83%"
  },
  {
    id: 5,
    quote: "El curso fue excelente.",
    author: "Encuesta Centro REDES",
    curso: "QGIS",
    satisfacción: "89%"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-stone-50 py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 text-[20rem] font-serif text-stone-100 font-bold -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none">
        “
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <div className="text-center mb-10 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-slate-900"
          >
            Lo que dicen nuestros estudiantes
          </motion.h2>
          <div className="h-1 w-20 bg-rose-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Marquee Container */}
        {/* Added py-12 to ensure the -top-4 icon isn't clipped by overflow-hidden */}
        <div className="relative w-full overflow-hidden py-12">
          {/* Gradient Masks for smooth fade out at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Track */}
          {/* We duplicate the array to create the infinite loop effect */}
          {/* hover:pause is handled by custom CSS below */}
          <div className="flex gap-8 animate-scroll w-max px-8 hover-pause">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="w-[300px] md:w-[380px] bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative group hover:shadow-lg transition-shadow duration-300 flex-shrink-0 whitespace-normal"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute -top-4 -left-2 bg-stone-50 p-2 rounded-full border border-stone-100 group-hover:border-rose-100 transition-colors z-10">
                  <Quote className="w-8 h-8 text-rose-500 fill-rose-500/10" />
                </div>

                <div className="pt-4 h-full flex flex-col justify-between">
                  <p className="font-serif italic text-slate-700 text-lg mb-8 leading-relaxed relative">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-stone-100 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-serif font-bold text-lg shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-slate-900 text-sm">{t.author}</h4>
                      <p className="font-sans text-xs text-slate-500 font-medium tracking-wide">
                        {t.curso} <span className="text-rose-300 mx-1">•</span> {t.satisfacción}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 16px)); } /* Adjust for half width + half gap */
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
