import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StoryScreen } from '../../types';
import { Button } from '../ui/Button';
import { HelpCircle } from 'lucide-react';

interface QuizSlideProps {
  data: StoryScreen;
  onCorrect: () => void;
  onWrongAnswer: (message: string) => void;
}

export const QuizSlide: React.FC<QuizSlideProps> = ({ data, onCorrect, onWrongAnswer }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (option: { correct: boolean; alertText?: string }) => {
    if (option.correct) {
      onCorrect();
    } else {
      onWrongAnswer(option.alertText || "¡Incorrecto!");
    }
  };

  return (
    <div className="flex flex-col h-full p-6 items-center justify-between py-12">
      <div className="flex flex-col items-center w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full aspect-square mb-6 border-4 border-black rounded-lg overflow-hidden bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <img
            src={data.imageSrc}
            alt={data.imageAlt}
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <HelpCircle size={24} className="text-sketch-black flex-shrink-0" />
          <p className="text-2xl text-center font-bold text-sketch-black">
            {data.quizQuestion}
          </p>
        </motion.div>
      </div>

      {/* Answer Buttons */}
      <div className="w-full flex flex-row gap-4 mt-6">
        {showButtons && data.quizOptions?.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-1"
          >
            <Button
              variant="ghost"
              onClick={() => handleAnswer(option)}
              className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-4 text-2xl py-8"
            >
              {option.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
