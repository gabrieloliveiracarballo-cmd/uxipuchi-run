import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 40 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute inset-x-4 bottom-8 z-50 bg-red-50 border-4 border-red-800 rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 cursor-pointer"
      onClick={onClose}
    >
      <XCircle size={28} className="text-red-800 flex-shrink-0" />
      <p className="text-lg font-bold text-red-900 font-comic">{message}</p>
    </motion.div>
  );
};
