import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAtom,
  faBasketball,
  faCode,
  faEllipsisV,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faNewspaper,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
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
library.add(
  faEllipsisV,
  faGlobeEurope,
  faGlobeAmericas,
  faGlobeAsia,
  faAtom,
  faCode,
  faTerminal,
  faBasketball,
  faNewspaper,
);
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
