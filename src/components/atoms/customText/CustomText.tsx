import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {CustomTextPresets} from './customText.presets';
import type {CustomTextProps} from './customText.props';

export default function CustomText(props: CustomTextProps) {
  // grab the props
  const {
    children,
    preset = 'default',
    style: styleOverride,
    text,
    ...rest
  } = props;

  // figure out which content to use
  const content = text || children;

  const style = CustomTextPresets[preset] || CustomTextPresets.default;
  const styles = [style, styleOverride];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
