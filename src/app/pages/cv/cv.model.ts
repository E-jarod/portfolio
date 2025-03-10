import type { Ref } from 'vue';

type CvState = {
  isEnglish: Ref<boolean>;
};

export type ProvidedIsEnglish = Readonly<CvState['isEnglish']>;
