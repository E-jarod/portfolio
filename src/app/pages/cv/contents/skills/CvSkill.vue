<script setup lang="ts">
import type {
  TwPaddingsForCv,
  RepeatString,
} from '@shared/utils/tw-sizing.utils';
import type {
  TwBgColors,
  TwFillColors,
} from '@shared/utils/tw-colors.utils';
import { FaIcon } from '@app/shared/utils/fa-icons.utils';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CvSkillProps {
  isSvg?: boolean | undefined;
  separator?: boolean | undefined;
  isConfirmedSkill?: boolean | undefined;
  skillName: string;
  padding?: RepeatString<TwPaddingsForCv, 2> | undefined;
  bgColor: TwBgColors;
  faIcon?: {
    color: string; //TwTextColors;
    icon: IconProp | string;
  };
  svgIcon?:
    | {
        rounded?: boolean;
        color: TwFillColors;
        path: string;
        id: string;
      }
    | undefined;
}

defineProps<CvSkillProps>();
</script>

<template>
  <li
    class="inline-flex items-center w-full space-x-10vw"
    :class="{ 'border-b-2 border-red-100 mb-2vw pb-2vw': separator }"
  >
    <div
      class="inline-flex items-center justify-center rounded-full w-12vw h-12vw"
      :class="[bgColor, padding, { 'p-2vw': !padding }]"
    >
      <svg
        v-if="isSvg && svgIcon"
        class="inline-block stroke-current stroke-0 h-8vw w-8vw"
        :class="[
          svgIcon.color,
          { 'rounded-sm md:rounded-md': svgIcon.rounded },
        ]"
      >
        <symbol :id="svgIcon.id" viewBox="0 0 32 32">
          <path :d="svgIcon.path"></path>
        </symbol>
        <use :xlink:href="`#${svgIcon.id}`"></use>
      </svg>

      <fa-icon
        v-else-if="!isSvg && !!faIcon"
        class="w-8vw !h-8vw"
        :class="[faIcon?.color]"
        :icon="faIcon?.icon ?? ['fab', 'github']"
      ></fa-icon>
    </div>

    <span
      class="text-xlvw"
      :class="{ 'font-bold': isConfirmedSkill }"
      v-text="skillName"
    ></span>
  </li>
</template>
