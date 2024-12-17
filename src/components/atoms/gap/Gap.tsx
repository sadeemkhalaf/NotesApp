import React from 'react';

import { View } from 'react-native';
import type { IGapProps } from './gap.props';
import { scaleByHeight, scaleByWidth } from '@/utils/appUtils';


export default function Gap({ gapValue = 0, type }: IGapProps) {
  return (
    <React.Fragment>
      {type === 'col' ? (
        <View style={{ height: scaleByHeight(gapValue) }} />
      ) : (
        <View style={{ width: scaleByWidth(gapValue) }} />
      )}
    </React.Fragment>
  );
};
