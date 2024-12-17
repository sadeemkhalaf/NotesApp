import {TextInputProps, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {PRESETS} from './customTextField.presets';

export interface CustomTextFieldProps extends TextInputProps {
  /**
   * The Placeholder text.
   */
  placeholder?: string;

  /**
   * The label text.
   */
  label?: string;
  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS;

  forwardedRef?: any;
}
