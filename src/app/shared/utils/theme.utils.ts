import { localStorageService } from '@services/local-storage.service';

const lsThemeKey = 'isDark';

const updateDomDarkMode = (isDark: boolean): void => {
  const keyNotExists = !(lsThemeKey in localStorageService.localStorage);
  const mediaString = '(prefers-color-scheme: dark)';
  const { matches: systemDefaultIsDark } = window.matchMedia(mediaString);
  const darkModeCondition =
    isDark || (keyNotExists && systemDefaultIsDark);
  // alert(
  //   `${darkModeCondition.toString()}: ${isDark.toString()} || (${keyNotExists.toString()} && ${systemDefaultIsDark.toString()})`,
  // );

  document.documentElement.setAttribute('data-dark', 'true');
  const { documentElement: htmlTag } = document;

  if (darkModeCondition) htmlTag.classList.add('dark');
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
