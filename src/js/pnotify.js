import { info, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const getInfo = info;

function myInfo(value) {
  const options = {
    title: value,
    text: `Мы сделали подборку ${value}`,
  };
  return options;
}

export { getInfo, myInfo };
