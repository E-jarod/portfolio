import type { ComputedRef, UnwrapNestedRefs } from 'vue';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import CvTimespanAteliomContent from './CvTimespanAteliomContent.vue';
import CvTimespanPassTechContent from './CvTimespanPassTechContent.vue';
import CvTimespanPersonalContent from './CvTimespanPersonalContent.vue';

export const timespanContents = [
  CvTimespanAteliomContent,
  CvTimespanPassTechContent,
  CvTimespanPersonalContent,
];

export interface CvTimespanProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  structureIcon: IconProp;
  structureName: string;
  locationIcon: IconProp;
  locationName: string;
  startDate: Date;
  endDate?: Date;
  badgeText?: string;
}

type Reffify<Type> = {
  [Property in keyof Type]: ComputedRef<Type[Property]> | Type[Property];
};
export type TimespanInfo = UnwrapNestedRefs<Reffify<CvTimespanProps>>;
