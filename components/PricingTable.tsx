import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote } from 'lucide-react';
import { CoursePricing } from '../types';

interface PricingTableProps {
  price: string;
  pricing: CoursePricing;
}

export const PricingTable: React.FC<PricingTableProps> = ({ price, pricing }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-serif font-bold text-slate-900 text-center mb-6">Aranceles</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Pago total */}
        <div className="paper-card rounded-2xl p-6 flex flex-col items-center text-center border-2 border-rose-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-rose-500" />
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-4">
            <Banknote className="w-6 h-6 text-rose-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Monto Total en 1 pago
          </p>
          <p className="text-xs text-slate-400 mb-4">Incluye un 10% de descuento</p>
          <p className="text-3xl font-bold text-slate-900 mb-1">{price}</p>
          <p className="text-xs text-slate-400 mb-6">(pesos argentinos)</p>
          <a
            href={pricing.paymentFullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-2.5 transition-all duration-300 shadow-lg shadow-rose-500/20 hover:-translate-y-0.5"
          >
            Pagar aquí
          </a>
        </div>

        {/* Pago en cuotas */}
        <div className="paper-card rounded-2xl p-6 flex flex-col items-center text-center border-2 border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 to-slate-400" />
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <CreditCard className="w-6 h-6 text-slate-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Monto por cuota
          </p>
          <p className="text-xs text-slate-400 mb-4">Son 2 cuotas de:</p>
          <p className="text-3xl font-bold text-slate-900 mb-1">{pricing.installmentPrice}</p>
          <p className="text-xs text-slate-400 mb-6">(pesos argentinos)</p>
          <a
            href={pricing.paymentInstallmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-700 hover:bg-slate-800 text-white font-medium px-6 py-2.5 transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            Pagar aquí
          </a>
        </div>
      </div>
    </motion.div>
  );
};
