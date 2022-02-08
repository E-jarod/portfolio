import type { Ref } from 'vue';

interface CvState {
  openCv: Ref<boolean>;
  isEnglish: Ref<boolean>;
}

export type ProvidedIsEnglish = Readonly<CvState['isEnglish']>;
export type ProvidedOpenCv = Readonly<CvState['openCv']>;
