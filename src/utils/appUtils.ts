import {Dimensions} from 'react-native';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/ar';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

// based on iphone 11s's scale
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scaleByHeight = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

export const scaleByWidth = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleByWidth(size) - size) * factor;

// convert numbers before submitting
export const englishToArabicNumbers = (str: string) => {
  const indianNumbers = '٠١٢٣٤٥٦٧٨٩';
  return String(str)?.replace(/\d/g, d => indianNumbers[d]);
};

export const formatDateKeyByLang = (date: string, langType: 'ar' | 'en') => {
  switch (langType) {
    case 'ar':
      moment.updateLocale('ar', {
        months: [
          'يناير',
          'فبراير',
          'مارس',
          'أبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر',
        ],
      });
      const newFormatedDay = englishToArabicNumbers(
        moment(date).startOf('day').format('D'),
      );
      const newFormatedMonth = moment(date).startOf('month').format('MMMM');
      const newFormatedYear = englishToArabicNumbers(
        moment(date).startOf('month').format('YYYY'),
      );
      return `${newFormatedDay} ${newFormatedMonth} ${newFormatedYear}`;
    default:
      return moment(date).startOf('day').format('D MMMM YYYY');
  }
};
