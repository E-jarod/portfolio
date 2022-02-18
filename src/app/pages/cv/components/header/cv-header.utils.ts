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

export const getMyAge = (): number => {
  const myBirthDay = new Date(2001, 1, 3);
  const myAgeDifferenceInMs = Date.now() - myBirthDay.getTime();
  const myAgeDate = new Date(myAgeDifferenceInMs);
  return Math.abs(myAgeDate.getUTCFullYear() - 1970);
};
