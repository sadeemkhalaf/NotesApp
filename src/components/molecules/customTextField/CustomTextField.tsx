import React, { useState } from 'react';
import type {
  TextStyle,
  ViewStyle} from 'react-native';
import {
  TextInput,
  View
} from 'react-native';
import type { CustomTextFieldProps } from './customTextField.props';
import { PRESETS } from './customTextField.presets';
import { moderateScale, scaleByHeight } from '@/utils/appUtils';
import { Colors } from '@/theme/colors';
import { CustomText } from '@/components/atoms';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingBottom: scaleByHeight(12),
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  backgroundColor: 'transparent',
  borderBottomColor: Colors.black,
  borderBottomWidth: moderateScale(1),
  color: Colors.black,
  fontSize: moderateScale(16),
  height: scaleByHeight(42),
  paddingHorizontal: moderateScale(16),
};

const focusedInput: ViewStyle = {
  borderBottomColor: Colors.purple,
};

function CustomTextField(props: CustomTextFieldProps) {
  const {
    forwardedRef,
    inputStyle: inputStyleOverride,
    label,
    placeholder = '',
    preset = 'default',
    style: styleOverride,
    ...rest
  } = props;

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride];
  const inputStyles = [INPUT, inputStyleOverride];

  const [focused, setFocused] = useState(false);

  const handleFocus = (current: boolean) => {
    setFocused(current);
  };

  return (
    <View style={containerStyles}>
      <CustomText preset="fieldLabel" text={label} />
      <TextInput
        autoCapitalize={'none'}
        onBlur={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        underlineColorAndroid={'transparent'}
        {...rest}
        ref={forwardedRef}
        style={[inputStyles, focused && { ...focusedInput }]}
      />
    </View>
  );
}

export default CustomTextField;