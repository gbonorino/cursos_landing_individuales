import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '../constants';
import { Clock, Cpu, Map, Terminal } from 'lucide-react';

export const BioTimeline: React.FC = () => {
  const getIcon = (year: string) => {
    if (year.includes("1979")) return <Map className="w-5 h-5 text-rose-500" />;
    if (year.includes("1984")) return <Terminal className="w-5 h-5 text-rose-500" />;
    if (year.includes("2004")) return <Clock className="w-5 h-5 text-rose-500" />;
    return <Cpu className="w-5 h-5 text-rose-500" />;
  };

  return (
    <section id="bio" className="py-24 bg-stone-50 relative overflow-hidden">
       {/* Decorative Lines */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 dashed z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="font-serif italic text-rose-500 text-lg mb-2 block">El legado</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Evolución Científica</h2>
        </div>

        <div className="flex flex-col gap-24">
          {MILESTONES.map((milestone, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[24px] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-rose-200 z-20 shadow-sm"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'}`}>
                
                <div className="inline-block mb-3">
                   <span className={`bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2 w-fit ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                     {getIcon(milestone.year)}
                     <span>{milestone.tool}</span>
                   </span>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3">{milestone.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {milestone.desc}
                  </p>
                </div>
              </div>

              {/* Spacer for structure */}
              <div className="hidden md:block w-1/2" />

              {/* Year - Positioned Opposite on Desktop, Top Right on Mobile */}
              <h3 className={`absolute -z-10 font-serif font-black select-none text-stone-200/80
                text-6xl top-[-2rem] right-0
                md:text-9xl md:top-1/2 md:-translate-y-1/2 md:text-stone-200
                ${index % 2 === 0 
                   ? 'md:right-[52%] md:text-right' // Even: Content Right, Year Left
                   : 'md:left-[52%] md:text-left' // Odd: Content Left, Year Right
                }
              `}>
                  {milestone.year}
              </h3>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};