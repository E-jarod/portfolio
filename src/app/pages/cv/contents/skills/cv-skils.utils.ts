import type { CvSkillProps } from './cv-skill-props.model';
import { frameworkSkills } from './framework-skills.data';
import { languagesSkills } from './languages-skills.data';
import { toolsSkills } from './tools-skills.utils';

export const skills: CvSkillProps[] = [
  ...frameworkSkills,
  ...languagesSkills,
  ...toolsSkills,
];

export type { CvSkillProps };
