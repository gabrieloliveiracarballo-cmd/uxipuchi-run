import { ScreenType, StoryScreen } from './types';

// Helper para obtener la ruta correcta de las imágenes (funciona en local y GitHub Pages)
const getImg = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

// 📸 AQUÍ ES DONDE TIENES QUE PONER LOS NOMBRES DE TUS FOTOS
// Asegúrate de que los archivos estén en la carpeta public/images/
const IMAGES = {
  TRISTE: getImg("Pol triste brazos rodilla.jpeg"),       // Foto para cuando está triste
  FELIZ: getImg("Pol celtista.jpeg"),         // Foto para cuando está feliz/bici
  SONADOR: getImg("Pol celtista.jpeg"),     // Foto soñando
  VIDENTE: getImg("tu_foto_vidente.jpg"),     // Foto del vidente
  ASUSTADO: getImg("tu_foto_asustado.jpg"),   // Foto asustado/fiesta
  ESPERANZADO: getImg("tu_foto_esperanzado.jpg"), // Foto final esperanzado
};

export const STORY_DATA: StoryScreen[] = [
  {
    id: 1,
    type: ScreenType.INTRO_DECISION,
    imageSrc: IMAGES.TRISTE,
    imageAlt: "Pol triste",
    initialText: "Este es pol y, como ves, está muy triste.",
    badButtonText: "Mátalo",
    goodButtonText: "Quiero ayudarlo",
    badOutcomeText: "Has perdido una gran oportunidad. Gracias."
  },
  {
    id: 2,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.FELIZ,
    imageAlt: "Pol feliz con su bici",
    title: "¿Quién es pol?",
    lines: [
      "pol es un chico de Bueu, muy majo.",
      "Le gusta el ciclismo...",
      "...el Celta de Vigo...",
      "...y pasar tiempo con sus amigos."
    ],
    nextButtonText: "¿Y qué le pasó?"
  },
  {
    id: 3,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.SONADOR,
    imageAlt: "Pol soñando",
    title: "Los Sueños",
    lines: [
      "Siempre fue un chico muy alegre y soñador.",
      "Su sueño era emprender, tener una familia y vivir en Lisboa.",
      "Pero un día... todo cambió para él."
    ],
    nextButtonText: "¿Qué pasó entonces?"
  },
  {
    id: 4,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.VIDENTE,
    imageAlt: "El vidente Pedro",
    title: "El Vidente",
    lines: [
      "Un día visitó al vidente Pedro.",
      "pol le preguntó por la mujer de sus sueños.",
      "Pedro dijo que la vería bailando en la discoteca."
    ],
    nextButtonText: "..."
  },
  {
    id: 5,
    type: ScreenType.STORY_REVEAL,
    imageSrc: IMAGES.ASUSTADO,
    imageAlt: "Pol asustado en la fiesta",
    title: "El Miedo",
    lines: [
      "pol la vio...",
      "...pero por miedo al rechazo, no le habló."
    ],
    nextButtonText: "Siguiente"
  },
  {
    id: 6,
    type: ScreenType.CLIMAX_DECISION,
    imageSrc: IMAGES.TRISTE,
    imageAlt: "Pol triste de nuevo",
    title: "El Clímax",
    initialText: "Desde entonces, pol anda apenado. Solo tú puedes salvarlo.",
    badButtonText: "Lo mato",
    goodButtonText: "Lo salvo",
    badOutcomeText: "Has decidido acabar con la historia. Pol nunca será feliz."
  },
  {
    id: 7,
    type: ScreenType.INPUT,
    imageSrc: IMAGES.ESPERANZADO,
    imageAlt: "Pol esperanzado",
    title: "Desenlace",
    initialText: "pol necesita tu Instagram para volver a ser feliz.",
    placeholder: "@tu_instagram",
    submitButtonText: "Salvar a pol"
  }
];