import { localStorageService } from '@services/local-storage.service';

const lsThemeKey = 'isDark';

const updateThemeInDom = (isDark: boolean): void => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const cond =
    lsThemeKey in localStorageService.localStorage &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDark || cond) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
};

export const initTheme = (): void => {
  if (localStorageService.getItem<boolean>(lsThemeKey) == null)
    localStorageService.setItem(lsThemeKey, false);

  const isDark = getIsDarkFromLS();

  updateThemeInDom(isDark);
};

export const getIsDarkFromLS = (): boolean =>
  localStorageService.getItem<boolean>(lsThemeKey) ?? false;

export const changeTheme = (): void => {
  const newTheme = !getIsDarkFromLS();
  localStorageService.setItem(lsThemeKey, newTheme);
  updateThemeInDom(newTheme);
};
