import Moment from 'moment';
import { extendMoment } from 'moment-range';

Moment.locale('fr', {
  months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
});

const MANAGED_LOCALES = ['en', 'fr'];

export const isLocaleHandled = l => {
  if (!l) return false;
  return MANAGED_LOCALES.includes(l.toLowerCase());
}

export const moment = extendMoment(Moment);

export const setMomentLocale = l => {
  if(MANAGED_LOCALES.includes(l)) moment.locale(l);
  else console.warn(`Locale ${l} is not currently handled`);
}

export const makeMoment = (time) => {
  if (!time) return moment();
  return moment.isMoment(time) ? time : moment(time);
}
