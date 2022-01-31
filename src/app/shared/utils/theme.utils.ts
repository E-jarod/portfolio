import { localStorageService as ls } from '@services/local-storage.service';

const lsThemeKey = 'isDark';
const colorSchemeMedia = '(prefers-color-scheme: dark)';
const { matches: systemDefaultIsDark } =
  window.matchMedia(colorSchemeMedia);

const updateDomDarkMode = (isDark: boolean): void => {
  const keyNotExists = !(lsThemeKey in localStorage);
  const darkModeCondition =
    isDark || (keyNotExists && systemDefaultIsDark);

  document.documentElement.setAttribute('data-dark', 'true');
  const { documentElement: htmlTag } = document;

  if (darkModeCondition) htmlTag.classList.add('dark');
  else htmlTag.classList.remove('dark');
};

export const initTheme = (): void => {
  if (ls.getItem<boolean>(lsThemeKey) == null)
    if (systemDefaultIsDark) ls.setItem(lsThemeKey, true);
    else ls.setItem(lsThemeKey, false);

  const isDark = getIsDarkFromLS();

  updateDomDarkMode(isDark);
};

export const getIsDarkFromLS = (): boolean =>
  ls.getItem<boolean>(lsThemeKey) ?? false;

export const changeTheme = (): void => {
  const newTheme = !getIsDarkFromLS();
  ls.setItem(lsThemeKey, newTheme);
  updateDomDarkMode(newTheme);
};
