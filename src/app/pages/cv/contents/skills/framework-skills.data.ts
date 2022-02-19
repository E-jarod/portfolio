import { CvSkillProps } from './cv-skill-props.model';

export const frameworkSkills: CvSkillProps[] = [
  {
    skillName: 'Flutter',
    isConfirmedSkill: true,
    bgColor: 'bg-sky-100',
    isSvg: true,
    svgIcon: {
      id: 'icon-flutter',
      color: 'fill-sky-500',
      path: 'M19.085 0l-16.019 16 4.933 4.933 20.912-20.917h-9.809zM19.104 14.763l-8.628 8.609 8.627 8.627h9.831l-8.613-8.624 8.613-8.613z',
    },
    padding: 'p-2vw pr-3vw',
  },
  {
    skillName: 'Vue',
    isConfirmedSkill: true,
    bgColor: 'bg-green-100',
    isSvg: true,
    svgIcon: {
      id: 'icon-vue',
      color: 'fill-green-500',
      path: 'M32 2.147h-13.253l-2.747 4.733-2.747-4.733h-13.253l16 27.707zM16 18.773l-9.12-15.8h5.907l3.213 5.573 3.213-5.573h5.907z',
    },
    padding: 'p-2vw pt-3vw',
  },
  {
    skillName: 'Angular',
    isConfirmedSkill: true,
    bgColor: 'bg-red-100',
    isSvg: true,
    svgIcon: {
      id: 'icon-angular',
      color: 'fill-red-500',
      path: 'M13.24 16.86h5.512l-2.757-6.54zM15.995 0.012l-15.080 5.305 2.3 19.68 12.78 6.991 12.784-6.984 2.299-19.684zM25.405 24.408h-3.515l-1.893-4.668h-8.004l-1.893 4.668h-3.517l9.413-20.864z',
    },
  },
  {
    skillName: 'React',
    bgColor: 'bg-blue-100',
    faIcon: {
      color: 'text-blue-500',
      icon: ['fab', 'react'],
    },
  },
  {
    skillName: 'Nest.js',
    isConfirmedSkill: true,
    bgColor: 'bg-green-100',
    faIcon: {
      color: 'text-green-600',
      icon: ['fab', 'node-js'],
    },
  },
  {
    separator: true,
    skillName: 'Android',
    bgColor: 'bg-green-100',
    faIcon: {
      color: 'text-green-500',
      icon: ['fab', 'android'],
    },
  },
];
