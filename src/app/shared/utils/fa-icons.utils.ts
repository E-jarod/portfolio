import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// solid
library.add(faEllipsisV);
// regular
library.add(faMoon, faSun);
// brands
library.add(faGithub, faLinkedin);

export const FaIcon = FontAwesomeIcon;
