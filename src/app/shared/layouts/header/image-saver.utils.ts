// TODO:
// https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page
// AND
// https://stackoverflow.com/questions/22932422/get-github-avatar-from-email-or-name

export const updateProfileImage = async (
  sizeInPixels = 32,
): Promise<string> => {
  const { url } = await fetch(
    `https://avatars.githubusercontent.com/E-jarod?size=${sizeInPixels}`,
  );
  return url ?? '';
};
