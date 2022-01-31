interface SocialInfo {
  icon: string;
  username: string;
  url: string;
  textColor: string;
}

// https://stackoverflow.com/questions/64933979/discord-get-user-by-id
// const getDiscordUsername = async (): Promise<string> => {
//   const data = await fetch('https://discord.com/users/717671473967398952');
//   console.log(data);
//   return '';
// };

// void getDiscordUsername();

export const socialInfos: SocialInfo[] = [
  {
    icon: 'discord',
    username: 'LifeIs{mood}',
    url: 'https://discord.com/users/717671473967398952',
    textColor: 'text-indigo-600',
  },
  {
    icon: 'github',
    username: 'E-jarod',
    url: 'https://github.com/E-jarod',
    textColor: 'text-black',
  },
  {
    icon: 'gitlab',
    username: 'E-jarod',
    url: 'https://gitlab.com/E-jarod',
    textColor: 'text-orange-500',
  },
  {
    icon: 'linkedin',
    username: 'Jarod EJILANE',
    url: 'https://www.linkedin.com/in/e-jarod/',
    textColor: 'text-blue-600',
  },
  {
    icon: 'twitter',
    username: 'E_jarod7',
    url: 'https://twitter.com/E_jarod7',
    textColor: 'text-sky-500',
  },
  {
    icon: 'stack-overflow',
    username: 'e-jarod',
    url: 'https://stackoverflow.com/users/13041777/e-jarod',
    textColor: 'text-orange-500',
  },
];
