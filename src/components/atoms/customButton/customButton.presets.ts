import type { TextStyle, ViewStyle } from 'react-native';
import { Colors } from '@/theme/colors';
import { moderateScale } from '@/utils/appUtils';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  alignItems: 'center',
  borderRadius: moderateScale(4),
  justifyContent: 'center',
  paddingHorizontal: moderateScale(4),
  paddingVertical: moderateScale(4),
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: moderateScale(8),
};

export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: {
    ...BASE_VIEW,
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(8),
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    alignItems: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  buttonText: {
    ...BASE_TEXT,
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: Colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
  primary: {
    ...BASE_TEXT,
    color: Colors.white,
    fontSize: moderateScale(9),
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
