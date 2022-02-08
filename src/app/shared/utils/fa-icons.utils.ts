import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEllipsisV,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
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
library.add(faEllipsisV, faGlobeEurope, faGlobeAmericas, faGlobeAsia);
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
