import React from 'react';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-stone-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            Certificación por Centro REDES (asociado CONICET)
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center">
          {/* Left: Centro REDES */}
          <div className="flex justify-center md:justify-end md:pr-24 group cursor-default">
            <img
              src="/logos/Logo-REDES-3.svg"
              alt="Centro REDES"
              className="block h-16 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity shrink-0"
              loading="lazy"
            />
          </div>

          {/* Right: CONICET */}
          <div className="flex justify-center md:justify-start md:pl-24 group cursor-default">
            <img
              src="/logos/conicet-seeklogo.svg"
              alt="CONICET"
              className="block h-16 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity shrink-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
