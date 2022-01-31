import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faDiscord,
  faGithub,
  faGitlab,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// solid
library.add(faEllipsisV);
// regular
library.add(faMoon, faSun);
// brands
library.add(
  faGithub,
  faLinkedin,
  faGitlab,
  faTwitter,
  faStackOverflow,
  faDiscord,
);

export const FaIcon = FontAwesomeIcon;
