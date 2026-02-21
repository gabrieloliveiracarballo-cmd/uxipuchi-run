import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { DecisionSlide } from './components/slides/DecisionSlide';
import { StoryRevealSlide } from './components/slides/StoryRevealSlide';
import { QuizSlide } from './components/slides/QuizSlide';
import { CelebrationSlide } from './components/slides/CelebrationSlide';
import { Toast } from './components/ui/Toast';
import { STORY_DATA } from './constants';
import { ScreenType } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentSlideData = STORY_DATA[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < STORY_DATA.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  const handleBadChoice = () => {
    showToast(currentSlideData.badOutcomeText || "¡Piénsalo bien!");
  };

  const renderSlide = () => {
    switch (currentSlideData.type) {
      case ScreenType.INTRO_DECISION:
      case ScreenType.CLIMAX_DECISION:
        return (
          <DecisionSlide
            data={currentSlideData}
            onGoodChoice={handleNext}
            onBadChoice={handleBadChoice}
          />
        );
      case ScreenType.STORY_REVEAL:
        return (
          <StoryRevealSlide
            data={currentSlideData}
            onNext={handleNext}
          />
        );
      case ScreenType.QUIZ:
        return (
          <QuizSlide
            data={currentSlideData}
            onCorrect={handleNext}
            onWrongAnswer={showToast}
          />
        );
      case ScreenType.CELEBRATION:
        return (
          <CelebrationSlide
            data={currentSlideData}
          />
        );
      default:
        return <div>Unknown slide type</div>;
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStepIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {toastMessage && (
          <Toast
            key="toast"
            message={toastMessage}
            onClose={() => setToastMessage(null)}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default App;
