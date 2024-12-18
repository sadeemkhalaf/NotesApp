import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { moderateScale } from '@/utils/appUtils';
import { Colors } from '@/theme/colors';
import { NoteCategoryEnums } from '@/utils/types';

export const getIconByNoteType = (NoteType: NoteCategoryEnums) => {
  switch (NoteType) {
    case NoteCategoryEnums.DONE:
      return (
        <FeatherIcon color={Colors.primary} name={'shopping-cart'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.IN_PROGRESS:
      return (
        <FeatherIcon color={Colors.primary} name={'heart'} size={moderateScale(20)} />
      );
    case NoteCategoryEnums.TODO:
      return (
        <FeatherIcon color={Colors.primary} name={'credit-card'} size={moderateScale(20)} />
      );
    default:
      return (
        <AntDesignIcon color={Colors.primary} name={'plus'} size={moderateScale(20)} />
      );
  }
};
