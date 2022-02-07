import { computed, reactive, toRefs } from 'vue';

enum TwBreakpoints {
  Sm = 640,
  Md = 768,
  Lg = 1024,
  Xl = 1280,
  DoubleXl = 1536,
}

interface TwBreakpointsStatus {
  isUnderSm: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
}

export const useTwSizeState = () => {
  const sizeState = reactive<TwBreakpointsStatus>({
    isUnderSm: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  });

  // Only one size
  const updateSizeState = (): void => {
    const w = window.innerWidth;
    const Tw = TwBreakpoints;

    sizeState.isUnderSm = w < Tw.Sm;
    sizeState.isSm = w >= Tw.Sm && w < Tw.Md;
    sizeState.isMd = w >= Tw.Md && w < Tw.Lg;
    sizeState.isLg = w >= Tw.Lg && w < Tw.Xl;
    sizeState.isXl = w >= Tw.Xl && w < Tw.DoubleXl;
    sizeState.is2Xl = w >= Tw.DoubleXl;
  };

  updateSizeState();

  return { ...toRefs(sizeState), updateSizeState };
};
