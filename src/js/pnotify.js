import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

export default {
  error(textContent) {
    PNotify.error({
      text: textContent,
    });
  },
};
