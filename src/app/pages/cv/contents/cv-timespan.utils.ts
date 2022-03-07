import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { ComputedRef, UnwrapNestedRefs } from 'vue';

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
