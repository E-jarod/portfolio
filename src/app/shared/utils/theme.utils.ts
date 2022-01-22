import { localStorageService } from '@services/local-storage.service';

const lsThemeKey = 'isDark';

const updateDomDarkMode = (isDark: boolean): void => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const darkModeCondition =
    lsThemeKey in localStorage &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const { classList: htmlTagClassList } = document.documentElement;

  if (isDark || darkModeCondition) htmlTagClassList.add('dark');
  else htmlTagClassList.remove('dark');
};

export const initTheme = (): void => {
  if (localStorageService.getItem<boolean>(lsThemeKey) == null)
    localStorageService.setItem(lsThemeKey, false);

  const isDark = getIsDarkFromLS();

  updateDomDarkMode(isDark);
};

export const getIsDarkFromLS = (): boolean =>
  localStorageService.getItem<boolean>(lsThemeKey) ?? false;

export const changeTheme = (): void => {
  const newTheme = !getIsDarkFromLS();
  localStorageService.setItem(lsThemeKey, newTheme);
  updateDomDarkMode(newTheme);
};
