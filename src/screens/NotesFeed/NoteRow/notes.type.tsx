import Icon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '@/utils/appUtils';
import { Colors } from '@/theme/colors';
import { NoteCategoryEnums } from '@/utils/types';

export const getIconByNoteType = (expenseType: NoteCategoryEnums) => {
  switch (expenseType) {
    case NoteCategoryEnums.CREDIT:
      return (
        <Icon color={Colors.primary} name={'credit-card'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.DONATIONS:
      return (
        <Icon color={Colors.primary} name={'heart'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.GROCERIES:
      return (
        <Icon color={Colors.primary} name={'shopping-cart'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.MEDICAL:
      return (
        <MaterialIcon color={Colors.primary} name={'local-hospital'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.OUTING:
      return (
        <Icon color={Colors.primary} name={'coffee'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.PERSONAL_CARE:
      return (
        <AntDesignIcon color={Colors.primary} name={'smileo'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.RENT:
      return (
        <Icon color={Colors.primary} name={'home'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.SHOPPING:
      return (
        <Icon color={Colors.primary} name={'shopping-bag'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.SUBSCRIPTIONS:
      return (
        <AntDesignIcon color={Colors.primary} name={'team'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.TRANSPORTATIONS:
      return (
        <IonIcon color={Colors.primary} name={'md-car-outline'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.UTILITIES:
      return (
        <Icon color={Colors.primary} name={'box'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.VACATION:
      return (
        <IonIcon color={Colors.primary} name={'airplane-outline'} size={moderateScale(20)} />
      );
    default:
      return (
        <AntDesignIcon color={Colors.primary} name={'plus'} size={moderateScale(20)} />
      );
  }
};
