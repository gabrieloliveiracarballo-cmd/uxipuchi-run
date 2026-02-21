import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScreenType, StoryScreen } from '../../types';
import { Button } from '../ui/Button';
import { Skull, Heart, ShieldCheck } from 'lucide-react';

interface DecisionSlideProps {
  data: StoryScreen;
  onGoodChoice: () => void;
  onBadChoice: () => void;
}

export const DecisionSlide: React.FC<DecisionSlideProps> = ({ data, onGoodChoice, onBadChoice }) => {
  const [showButtons, setShowButtons] = useState(false);

  // Delay for buttons to appear (faster now)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 300); // Reduced from 1500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full p-6 items-center justify-between py-12">
      <div className="flex flex-col items-center w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-64 h-64 mb-8 border-4 border-black rounded-lg overflow-hidden bg-gray-100"
        >
          <img
            src={data.imageSrc}
            alt={data.imageAlt}
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center font-bold text-sketch-black whitespace-pre-line"
        >
          {data.initialText}
        </motion.p>
      </div>

      {/* Buttons - Large squares occupying more space */}
      <div className="w-full flex-1 flex flex-row gap-4 mt-6">
        {showButtons && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <Button
                variant="danger"
                onClick={onBadChoice}
                className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-4 text-2xl py-8"
              >
                <Skull size={48} />
                {data.badButtonText}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex-1"
            >
              <Button
                variant="primary"
                onClick={onGoodChoice}
                className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-4 text-2xl py-8"
              >
                {data.type === ScreenType.CLIMAX_DECISION ? <ShieldCheck size={48} /> : <Heart size={48} />}
                {data.goodButtonText}
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};