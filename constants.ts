import { ScreenType, StoryScreen } from './types';

const getImg = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

const IMAGES = {
  CHICA_PENSANDO: getImg("img1.png"),
  OCEJO_LIGANDO: getImg("img2.png"),
  OCEJO_LLORANDO: getImg("img3.png"),
  OCEJO_CORRIENDO: getImg("img4.png"),
  EJERCICIO_CONTA: getImg("img5.png"),
  OCEJO_UXIA_FELICES: getImg("img6.png"),
};

export const STORY_DATA: StoryScreen[] = [
  {
    id: 1,
    type: ScreenType.INTRO_DECISION,
    imageSrc: IMAGES.CHICA_PENSANDO,
    imageAlt: "Chica pensando",
    initialText: "Uxía, ¿te gustaría aprobar contabilidad?",
    goodButtonText: "Sí, enséñame",
    badButtonText: "No, fracaso escolar",
    badOutcomeText: "¡Piénsalo bien!",
  },
  {
    id: 2,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.OCEJO_LIGANDO,
    imageAlt: "Ocejo ligando feliz",
    lines: [
      "Un genio de la contabilidad un día dijo",
      "Es mejor hablar tras pensar",
      "que pensar antes de hablar",
    ],
    nextButtonText: "Siguiente",
  },
  {
    id: 3,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.OCEJO_LLORANDO,
    imageAlt: "Ocejo llorando, chica con desprecio",
    lines: [
      "la chica ante semejante estupidez, se fue",
      "ese día Ocejo aprendió que debía cambiar su vida",
      "y empezó un reto",
    ],
    nextButtonText: "Siguiente",
  },
  {
    id: 4,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.OCEJO_CORRIENDO,
    imageAlt: "Ocejo corriendo en Samil",
    lines: [
      "Ocejo decidió que si quería a Conchi",
      "tenía que correr",
      "correr una carrera en particular",
    ],
    nextButtonText: "Siguiente",
  },
  {
    id: 5,
    type: ScreenType.QUIZ,
    imageSrc: IMAGES.EJERCICIO_CONTA,
    imageAlt: "Ejercicio de contabilidad",
    quizQuestion: "Antes de acabar la historia, la cuenta 429 a donde va?",
    quizOptions: [
      {
        label: "Debe",
        correct: false,
        alertText: "¡Error! Vuelve a intentarlo, casi suspendes.",
      },
      {
        label: "Haber",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    type: ScreenType.CLIMAX_DECISION,
    imageSrc: IMAGES.OCEJO_UXIA_FELICES,
    imageAlt: "Ocejo y Uxía felices",
    initialText: "Así que Uxía,\nSi tú quieres aprobar conta\nEl 12 de abril deberás correr\nLa mini bay. ¿Aceptas el reto?",
    goodButtonText: "Sí",
    badButtonText: "No, fracaso escolar",
    badOutcomeText: "¡Piénsalo bien!",
  },
  {
    id: 7,
    type: ScreenType.CELEBRATION,
    imageSrc: "",
    imageAlt: "",
    celebrationText: "¡Nos vemos en La Mini Bay el 12 de abril!",
  },
];
