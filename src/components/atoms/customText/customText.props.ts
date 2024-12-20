import type {StyleProp, TextProps as TextProperties, TextStyle} from 'react-native';
import type {TextPresets} from './customText.presets';

export interface CustomTextProps extends TextProperties {
  children?: React.ReactNode;
  preset?: TextPresets;
  style?: StyleProp<TextStyle>;
  text?: string;
}
