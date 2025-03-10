import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { Component } from 'vue';
import CvTimespanArvalContent from './experiences/CvTimespanArvalContent.vue';
import CvTimespanAteliomContent from './experiences/CvTimespanAteliomContent.vue';
import CvTimespanPassTechContent from './experiences/CvTimespanPassTechContent.vue';
import CvTimespanUmmaniteContent from './experiences/CvTimespanUmmaniteContent.vue';
import CvTimespanWeSaveContent from './experiences/CvTimespanWeSaveContent.vue';

export type TimespanInfo = {
  imgSrc: string;
  imgAlt: string;
  computeTitle: (isEnglish: boolean) => string;
  structureIcon: IconProp;
  structureName: string;
  locationIcon: IconProp;
  locationName: string;
  startDate: Date;
  endDate?: Date;
  computeBadgeText?: (isEnglish: boolean) => string;
  getComponent?: () => Component;
};

export const CV_TIMESPAN_INFOS: TimespanInfo[] = [
  {
    getComponent: () => CvTimespanWeSaveContent,
    imgSrc: '/wesave_logo.jpg',
    imgAlt: 'WeSave logo',
    computeTitle: (isEnglish) =>
      isEnglish ? 'Senior Vue Developer' : 'Développeur Vue Sénior',
    structureName: 'WeSave',
    locationName: 'Paris',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    computeBadgeText: (isEnglish) => (isEnglish ? 'Full time' : 'CDI'),
    startDate: new Date(2024, 0, 1),
    // endDate: new Date(2024, 2, 9),
  },
  {
    getComponent: () => CvTimespanUmmaniteContent,
    imgSrc: '/ummanite_logo.jpg',
    imgAlt: 'Ummanitg logo',
    computeTitle: (isEnglish) =>
      isEnglish ? 'Full Stack JS Developer' : 'Développeur Full Stack JS',
    structureName: 'Ummanité',
    structureIcon: ['fas', 'users'] as IconProp,
    locationName: 'Remote',
    locationIcon: ['fas', 'house-laptop'] as IconProp,
    computeBadgeText: (isEnglish) =>
      isEnglish ? 'Freelance' : 'Freelance',
    startDate: new Date(2023, 8, 1),
    endDate: new Date(2024, 6, 1),
  },
  {
    getComponent: () => CvTimespanArvalContent,
    imgSrc: '/arval_logo.jpeg',
    imgAlt: 'Arval logo',
    computeTitle: (isEnglish) =>
      isEnglish
        ? "Angular Developer | Extia's Consultant"
        : 'Développeur Angular | Consultant chez Extia',
    structureName: 'Arval',
    locationName: 'Rueil-Malmaison',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    computeBadgeText: (isEnglish) => (isEnglish ? 'Full time' : 'CDI'),
    startDate: new Date(2022, 8, 5),
    endDate: new Date(2024, 0, 1),
  },
  {
    getComponent: () => CvTimespanAteliomContent,
    imgSrc: '/improba_logo.jpeg',
    imgAlt: 'Improba logo',
    computeTitle: (isEnglish) =>
      isEnglish ? 'Full Stack JS Developer' : 'Développeur Full Stack JS',
    structureName: 'Improba',
    locationName: 'Paris',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    computeBadgeText: (isEnglish) =>
      isEnglish ? 'Apprenticeship' : 'Alternance',
    startDate: new Date(2021, 8, 6),
    endDate: new Date(2022, 7, 31),
  },
  {
    getComponent: () => CvTimespanPassTechContent,
    imgSrc: '/pass_technologie_logo.jpeg',
    imgAlt: 'PASS Technologie logo',
    computeTitle: (isEnglish) =>
      isEnglish
        ? 'Front-end Angular Developer'
        : 'Développeur Front-end Angular',
    structureName: 'Pass Technologie',
    locationName: 'Paris',
    locationIcon: ['fas', 'location-dot'] as IconProp,
    structureIcon: ['fas', 'briefcase'] as IconProp,
    computeBadgeText: (isEnglish) =>
      isEnglish ? 'Apprenticeship' : 'Alternance',
    startDate: new Date(2019, 7, 14),
    endDate: new Date(2021, 9, 31),
  },
];
