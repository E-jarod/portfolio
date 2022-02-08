export const getRightMonth = (date: Date, isEnglish: boolean): string =>
  date
    .toLocaleString(isEnglish ? 'en' : 'fr', {
      month: 'long',
    })
    .toLowerCase();

export const getAvalaibleText = (
  availableDate: string,
  isEnglish: boolean,
): string =>
  `${isEnglish ? 'Available in' : 'Disponible en'} ${availableDate}`;
