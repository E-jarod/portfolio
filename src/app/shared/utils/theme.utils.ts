import { localStorageService } from '@services/local-storage.service';

const lsThemeKey = 'isDark';

const updateDomDarkMode = (isDark: boolean): void => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const darkModeCondition =
    lsThemeKey in localStorage &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
  console.log(window.matchMedia('(prefers-color-scheme: light)'));

  document.documentElement.setAttribute('data-dark', 'true');
  const { documentElement: htmlTag } = document;

  if (isDark || darkModeCondition) htmlTag.classList.add('dark');
  else htmlTag.classList.remove('dark');
};

export const initTheme = (): void => {
  if (localStorageService.getItem<boolean>(lsThemeKey) == null)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      localStorageService.setItem(lsThemeKey, true);
    else localStorageService.setItem(lsThemeKey, false);

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
