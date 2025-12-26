import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StoryScreen } from '../../types';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface StoryRevealSlideProps {
  data: StoryScreen;
  onNext: () => void;
}

export const StoryRevealSlide: React.FC<StoryRevealSlideProps> = ({ data, onNext }) => {
  const [revealedIndex, setRevealedIndex] = useState(-1); // -1 means no lines shown yet
  const lines = data.lines || [];
  const isFinished = revealedIndex >= lines.length - 1;

  // Reset state when data changes (new slide)
  useEffect(() => {
    setRevealedIndex(-1);
  }, [data.id]);

  const handleTap = () => {
    if (!isFinished) {
      setRevealedIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      onClick={handleTap}
      className="flex flex-col h-full w-full p-6 cursor-pointer relative"
    >
      {/* Header/Title */}
      {data.title && (
        <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
          {data.title}
        </h3>
      )}

      {/* Image Area - Static at top */}
      <motion.div
        key={`img-${data.id}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full aspect-square mb-6 border-4 border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      {/* Dynamic Text Area */}
      <div className="flex-1 flex flex-col gap-3">
        {lines.map((line, index) => (
          <AnimatePresence key={index}>
            {index <= revealedIndex && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl text-sketch-black font-medium leading-relaxed"
              >
                {line}
              </motion.p>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Hint for user if nothing is revealed yet */}
      {revealedIndex === -1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
          className="flex flex-col items-center gap-2 mt-2 text-sketch-black font-bold"
        >
          <span className="text-xl">(Toca la pantalla)</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <ArrowRight className="rotate-90" size={32} />
          </motion.div>
        </motion.div>
      )}

      {/* Navigation Button */}
      <div className="h-20 flex items-end justify-center">
        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the reveal logic
                onNext();
              }}
            >
              <Button className="flex items-center gap-2">
                {data.nextButtonText} <ArrowRight size={18} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};