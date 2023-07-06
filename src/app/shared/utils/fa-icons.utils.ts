import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAtom,
  faBasketball,
  faBriefcase,
  faCalendarDays,
  faCode,
  faEllipsisV,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faGraduationCap,
  faHouseLaptop,
  faLocationDot,
  faNewspaper,
  faTerminal,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faAndroid,
  faAws,
  faDiscord,
  faDocker,
  faGitAlt,
  faGithub,
  faGitlab,
  faJava,
  faLinkedin,
  faNodeJs,
  faPython,
  faReact,
  faRust,
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
  faBriefcase,
  faLocationDot,
  faHouseLaptop,
  faCalendarDays,
  faGraduationCap,
  faUsers,
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
  faReact,
  faRust,
  faNodeJs,
  faAndroid,
  faPython,
  faGitAlt,
  faDocker,
  faAws,
  faJava,
);

export const FaIcon = FontAwesomeIcon;
