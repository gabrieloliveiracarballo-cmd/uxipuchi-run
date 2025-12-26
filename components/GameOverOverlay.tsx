import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface GameOverOverlayProps {
  message: string;
  onRestart: () => void;
}

export const GameOverOverlay: React.FC<GameOverOverlayProps> = ({ message, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-black text-white flex flex-col items-center justify-center p-8 text-center"
    >
      <h2 className="text-3xl mb-6 font-bold">{message}</h2>
      <Button variant="primary" className="bg-white text-black border-white hover:bg-gray-200" onClick={onRestart}>
        Reiniciar
      </Button>
    </motion.div>
  );
};