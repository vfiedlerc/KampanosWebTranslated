import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';
import ENUS from './locales/en/en-us.json';
import DEDE from './locales//de/de-de.json';

const resources = {
  'en-US': ENUS,
  'de-DE': DEDE

}

i18n
.use(initReactI18next)
.init({
   resources,
   lng: navigator.language,
   interpolation: {

    escapeValue: false,

   }

})
export default i18n;