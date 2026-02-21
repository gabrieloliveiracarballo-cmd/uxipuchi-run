import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { StoryScreen } from '../../types';

interface CelebrationSlideProps {
  data: StoryScreen;
}

const CONFETTI_EMOJIS = ['🎉', '🏃', '🏃‍♀️', '📚', '✨', '🎊', '💪', '🥇'];

interface ConfettiPiece {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const generateConfetti = (count: number): ConfettiPiece[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: CONFETTI_EMOJIS[i % CONFETTI_EMOJIS.length],
    x: Math.random() * 90 + 5,
    delay: Math.random() * 3,
    duration: 2.5 + Math.random() * 2.5,
    size: 20 + Math.random() * 16,
  }));
};

export const CelebrationSlide: React.FC<CelebrationSlideProps> = ({ data }) => {
  const confettiPieces = useMemo(() => generateConfetti(25), []);

  return (
    <div className="relative flex flex-col h-full items-center justify-center overflow-hidden">
      {/* Confetti Layer */}
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            y: -50,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            y: '100vh',
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${piece.x}%`,
            fontSize: `${piece.size}px`,
          }}
        >
          {piece.emoji}
        </motion.div>
      ))}

      {/* Main Text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.3,
        }}
        className="z-10 text-center px-8"
      >
        <motion.h1
          className="text-4xl font-bold text-sketch-black mb-6 leading-relaxed"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          {data.celebrationText}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-xl text-gray-600"
        >
          (y a aprobar contabilidad)
        </motion.p>
      </motion.div>
    </div>
  );
};
