import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Link as LinkIcon, Mail, Linkedin, Twitter, MessageCircle, Check } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  courseLink: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, courseTitle, courseLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(courseLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-formatted sharing URLs
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseLink)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`¡Recomiendo este curso del Dr. Bonorino! ${courseTitle}`)}&url=${encodeURIComponent(courseLink)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`Mira este curso: ${courseTitle} ${courseLink}`)}`,
    email: `mailto:?subject=${encodeURIComponent(`Te comparto este curso: ${courseTitle}`)}&body=${encodeURIComponent(`Hola,\n\nEncontré este curso que podría interesarte: ${courseTitle}.\n\nPuedes verlo aquí: ${courseLink}\n\nSaludos.`)}`
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold text-slate-900">Compartir Curso</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-stone-100 text-slate-500 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <p className="text-sm text-slate-600 mb-6 font-medium bg-stone-50 p-3 rounded-lg border border-stone-200">
                {courseTitle}
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <ShareOption 
                  icon={<Linkedin className="w-5 h-5" />} 
                  label="LinkedIn" 
                  href={shareUrls.linkedin} 
                  color="hover:text-[#0077b5] hover:bg-[#0077b5]/10" 
                />
                <ShareOption 
                  icon={<MessageCircle className="w-5 h-5" />} 
                  label="WhatsApp" 
                  href={shareUrls.whatsapp} 
                  color="hover:text-[#25D366] hover:bg-[#25D366]/10" 
                />
                <ShareOption 
                  icon={<Twitter className="w-5 h-5" />} 
                  label="Twitter" 
                  href={shareUrls.twitter} 
                  color="hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10" 
                />
                <ShareOption 
                  icon={<Mail className="w-5 h-5" />} 
                  label="Email" 
                  href={shareUrls.email} 
                  color="hover:text-slate-900 hover:bg-slate-100" 
                />
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  readOnly 
                  value={courseLink} 
                  className="w-full pl-4 pr-12 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-slate-500 focus:outline-none"
                />
                <button 
                  onClick={handleCopy}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-white text-slate-500 hover:text-rose-500 transition-all shadow-sm border border-transparent hover:border-stone-200"
                  title="Copiar enlace"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
                </button>
              </div>
              
              {copied && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-600 font-medium text-center mt-2"
                >
                  ¡Enlace copiado al portapapeles!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ShareOption: React.FC<{ icon: React.ReactNode; label: string; href: string; color: string }> = ({ icon, label, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex flex-col items-center gap-2 group`}
  >
    <div className={`w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-slate-600 transition-all duration-300 ${color} group-hover:scale-110`}>
      {icon}
    </div>
    <span className="text-xs text-slate-500 font-medium">{label}</span>
  </a>
);
