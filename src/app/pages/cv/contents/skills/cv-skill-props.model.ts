import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import type {
  TwPaddingsForCv,
  RepeatString,
} from '@shared/utils/tw-sizing.utils';
import type {
  TwBgColors,
  TwFillColors,
  TwTextColors,
} from '@shared/utils/tw-colors.utils';

export interface CvSkillProps {
  isSvg?: boolean;
  separator?: boolean;
  isConfirmedSkill?: boolean;
  skillName: string;
  padding?: RepeatString<TwPaddingsForCv, 2>;
  bgColor: TwBgColors;
  faIcon?: {
    color: TwTextColors;
    icon: IconProp;
  };
  svgIcon?: {
    rounded?: boolean;
    color: TwFillColors;
    path: string;
    id: `icon-${string}`;
  };
}
