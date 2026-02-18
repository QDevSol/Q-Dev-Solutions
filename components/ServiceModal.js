'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function ServiceModal({ isOpen, onClose, service }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !service) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#1A1330] border border-[#2D2050] rounded-2xl shadow-2xl shadow-purple-900/50 flex flex-col max-h-[90vh] overflow-hidden animate-fade-up">
        {/* Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
              {service.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {service.title}
            </h3>
          </div>
          
          {/* Decorative circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {service.description}
            </p>
            
            <div className="space-y-6">
              <h4 className="text-xl font-display font-semibold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.features && service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-display font-semibold text-white flex items-center gap-2 mt-8">
                <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full" />
                Why Choose Us
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {service.details || "We deliver excellence in every project, ensuring your business goals are met with precision and innovation."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#2D2050] bg-[#0D0A1A]/50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
          >
            Close
          </button>
          <Link
            href="/#contact"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 text-white text-sm font-semibold hover:from-violet-500 hover:to-purple-600 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
