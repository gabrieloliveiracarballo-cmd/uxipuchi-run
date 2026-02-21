export enum ScreenType {
  INTRO_DECISION = 'INTRO_DECISION',
  STORY_REVEAL = 'STORY_REVEAL',
  CLIMAX_DECISION = 'CLIMAX_DECISION',
  QUIZ = 'QUIZ',
  CELEBRATION = 'CELEBRATION'
}

export interface StoryScreen {
  id: number;
  type: ScreenType;
  imageSrc: string;
  imageAlt: string;
  title?: string;

  // For STORY_REVEAL
  lines?: string[];
  nextButtonText?: string;

  // For DECISIONS (Intro & Climax)
  initialText?: string;
  badButtonText?: string;
  goodButtonText?: string;
  badOutcomeText?: string;

  // For QUIZ
  quizQuestion?: string;
  quizOptions?: { label: string; correct: boolean; alertText?: string }[];

  // For CELEBRATION
  celebrationText?: string;
}
