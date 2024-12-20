import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { textPresets, viewPresets } from './customButton.presets';
import type { CustomButtonProps } from './customeButton.props';
import CustomText from '../customText/CustomText';

const CustomButton = (props: CustomButtonProps) => {
  const {
    children,
    height = 56,
    style: styleOverride,
    text,
    textStyle: textStyleOverride,
    ...rest
  } = props;

  const viewStyle = viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets.buttonText;
  const textStyles = [textStyle, textStyleOverride];

  const content = children || <CustomText style={textStyles} text={text} />;

  return (
    <TouchableOpacity style={[viewStyles, { height }]} {...rest}>
      {content}
    </TouchableOpacity>
  );
};

export default CustomButton;