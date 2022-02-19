<script setup lang="ts">
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
    id: string;
  };
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
        v-else-if="!isSvg && faIcon"
        class="w-8vw h-8vw"
        :class="[faIcon.color]"
        :icon="faIcon.icon"
      ></fa-icon>
      <span v-else>ERR</span>
    </div>
    <span
      class="text-xlvw"
      :class="{ 'font-bold': isConfirmedSkill }"
      v-text="skillName"
    ></span>
  </li>
</template>
