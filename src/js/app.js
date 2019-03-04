import svg4everybody from 'svg4everybody';
import './common';
import { isTouch } from './utils';
import { BODY, NO_TOUCH } from './constants';
svg4everybody();

if (!isTouch()) BODY.addClass(NO_TOUCH);
