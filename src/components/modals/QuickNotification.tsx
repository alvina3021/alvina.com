import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface QuickNotificationProps {
  message: string;
  onClose: () => void;
}

export const QuickNotification: React.FC<QuickNotificationProps> = ({ message, onClose }) => {
  return (
    <div
      id="quick-toast-notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 animate-slideUp text-sm"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="font-medium">{message}</span>
      <button
        id="toast-close-btn"
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
        aria-label="Tutup notifikasi"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
