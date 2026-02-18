import React from 'react';
import { Mail, Linkedin, BookOpen, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-stone-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-24 relative z-10">
        
        {/* Brand Section - Left Column */}
        <div className="text-center lg:text-left max-w-md w-full">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Bonorino Academy</h3>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
            Un puente entre la tradición académica y el futuro tecnológico. 
            Formación de rigor para la nueva era de las geociencias.
          </p>
          <div className="h-1 w-20 bg-rose-500 rounded-full mx-auto lg:mx-0"></div>
        </div>
        
        {/* Contact Section - Right Column */}
        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
           <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Canales de Contacto</span>
           
           {/* Vertical List of Contact Cards */}
           <div className="flex flex-col gap-4 w-full max-w-md lg:w-[380px]">
              {/* Email Card */}
              <a 
                href="mailto:g_bonorino@yahoo.com.ar"
                className="group flex items-center gap-4 px-5 py-4 bg-white border border-stone-200 rounded-xl hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-rose-50 text-rose-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left flex-grow">
                  <span className="block text-xs text-slate-400 font-medium mb-0.5">Consultas</span>
                  <span className="block text-slate-900 font-bold group-hover:text-rose-600 transition-colors break-all">g_bonorino@yahoo.com.ar</span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/gustavo-gonzalez-bonorino-b1a73262/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 bg-white border border-stone-200 rounded-xl hover:border-[#0077b5]/30 hover:shadow-xl hover:shadow-[#0077b5]/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-[#eaf4fe] text-[#0077b5] rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Linkedin size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left flex-grow">
                   <span className="block text-xs text-slate-400 font-medium mb-0.5">Networking</span>
                   <span className="block text-slate-900 font-bold group-hover:text-[#0077b5] transition-colors">LinkedIn Profile</span>
                </div>
                <ExternalLink size={16} className="text-stone-300 group-hover:text-[#0077b5] opacity-0 group-hover:opacity-100 transition-all ml-2" />
              </a>

              {/* ResearchGate Card */}
              <a 
                href="https://www.researchgate.net/profile/Gustavo-Bonorino"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 bg-white border border-stone-200 rounded-xl hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-teal-50 text-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left flex-grow">
                   <span className="block text-xs text-slate-400 font-medium mb-0.5">Investigación</span>
                   <span className="block text-slate-900 font-bold group-hover:text-teal-600 transition-colors">ResearchGate</span>
                </div>
                <ExternalLink size={16} className="text-stone-300 group-hover:text-teal-600 opacity-0 group-hover:opacity-100 transition-all ml-2" />
              </a>
           </div>
        </div>
      </div>

      {/* Institutional Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-200">
        <div className="mb-8 p-4 bg-stone-100/50 rounded-lg text-center md:text-left">
           <p className="text-xs text-slate-400 leading-relaxed max-w-5xl mx-auto">
             Esta plataforma es una iniciativa de difusión del Dr. Gustavo González Bonorino. La inscripción, cursada y certificación de todos los programas se realizan a través de la plataforma oficial del Centro de Estudios sobre Ciencia, Desarrollo y Educación Superior (REDES), unidad asociada al CONICET.
           </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-slate-400 gap-4">
           <p>© {new Date().getFullYear()} Dr. Gustavo González Bonorino. Todos los derechos reservados.</p>
           <p className="flex items-center justify-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
              Diseñado con Humanismo Científico
           </p>
        </div>
      </div>
    </footer>
  );
};