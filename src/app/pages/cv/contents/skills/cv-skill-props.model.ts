import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type {
  TwBgColors,
  TwFillColors,
  TwTextColors,
} from '@shared/utils/tw-colors.utils';
import type {
  RepeatString,
  TwPaddingsForCv,
} from '@shared/utils/tw-sizing.utils';

export interface CvSkillProps {
  isSvg?: boolean;
  separator?: boolean;
  isConfirmedSkill?: boolean;
  skillName: string;
  padding?: RepeatString<TwPaddingsForCv, 2>;
  bgColor: TwBgColors;
  faIcon?: {
    color: TwTextColors;
    icon: IconProp | string;
  };
  svgIcon?: {
    rounded?: boolean;
    color: TwFillColors;
    path: string;
    id: `icon-${string}`;
  };
}
