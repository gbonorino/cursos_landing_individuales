import React, { useState } from 'react';
import { Mail, Sparkles, FileText, CheckCircle, Loader2, Download } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

export const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // CONFIGURATION: 
  // We convert the Google Drive "View" link to a "Direct Download" link.
  // ID extracted from: 1a1tX3zKoor2VoBQo1W5jp2OKUKIKCOhH
  const REAL_PDF_PATH = "https://drive.google.com/file/d/1a1tX3zKoor2VoBQo1W5jp2OKUKIKCOhH/view?usp=sharing"; 
  
  // UPDATED URL: Using the latest deployment ID provided
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAfjL6D-G4wORwWRzZmR9UdXe1S65DIoOpl6VUs_rB3_bXGYOp7_zE6eRPlR27Ll8Pww/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Because 'no-cors' returns an opaque response, we cannot check response.ok.
      // We assume success if the request completes without a network error.
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Error submitting email:", error);
      // In case of network error, reset so user can try again
      setStatus('idle');
      alert("Hubo un error de conexión. Por favor intenta nuevamente.");
    }
  };

  const handleDownload = () => {
    // For Google Drive links, it is much more reliable to open in a new tab
    // than to try to fetch/blob inside the app (which causes CORS errors).
    window.open(REAL_PDF_PATH, '_blank');
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl p-8 md:p-16 relative shadow-2xl shadow-stone-200 border-t-4 border-rose-500">
          
          {/* Badge */}
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-rose-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded shadow-md flex items-center gap-2 z-20">
            <FileText size={14} />
            <span>Recurso PDF</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-rose-500 mb-4 bg-rose-50 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold tracking-wide text-xs uppercase">Descarga Directa</span>
              </div>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-6"
                  >
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="flex items-center gap-3 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                        <CheckCircle className="w-6 h-6" />
                        <span className="font-bold">¡Enviado!</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900">
                        Tu guía está lista.
                      </h3>
                      <p className="text-slate-600 mb-6">
                        Hemos registrado tu solicitud. Revisa tu correo (y la carpeta de spam). <br/>
                        También puedes descargar el material aquí mismo.
                      </p>
                      <Button 
                        variant="secondary" 
                        className="gap-2"
                        onClick={handleDownload}
                      >
                        <Download className="w-4 h-4" />
                        Descargar PDF Ahora
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                      Manejo de Github sin Código
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                      Una guía esencial curada por el Dr. Bonorino para gestionar versiones y colaboración sin tocar la línea de comandos.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                       <div className="relative flex-grow max-w-md">
                          <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="correo@universidad.edu" 
                            className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-sm disabled:opacity-50"
                            required
                            disabled={status === 'loading'}
                          />
                       </div>
                       <Button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="shrink-0 shadow-xl shadow-rose-500/10 min-w-[140px]"
                       >
                         {status === 'loading' ? (
                           <Loader2 className="w-5 h-5 animate-spin" />
                         ) : (
                           'Obtener Guía'
                         )}
                       </Button>
                    </form>
                    <p className="text-xs text-slate-400 mt-4 ml-4">
                      Únete a +2.000 científicos. Cero spam.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Visual Element (Folder) */}
            <div className="hidden md:block w-1/3 rotate-[-3deg]">
               <div className="bg-stone-50 p-6 shadow-xl rounded-lg border border-stone-200 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-stone-300 z-20 bg-transparent"></div>
                  <div className="w-full h-2 bg-stone-200 rounded mb-4 mt-2"></div>
                  <div className="w-3/4 h-2 bg-stone-200 rounded mb-8"></div>
                  <div className="space-y-3">
                    <div className="w-full h-24 bg-white rounded border border-stone-200 flex flex-col items-center justify-center text-rose-300 p-4 transition-all duration-500 hover:scale-105 cursor-pointer group" onClick={handleDownload}>
                       <span className="font-serif text-5xl opacity-40 mb-1 group-hover:text-rose-500 transition-colors">Git</span>
                       <span className="text-[10px] uppercase tracking-widest text-slate-400">Bonorino Academy</span>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
