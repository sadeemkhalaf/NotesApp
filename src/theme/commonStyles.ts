import { scaleByWidth } from '@/utils/appUtils';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  alignItems: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  ph30: {
    paddingHorizontal: scaleByWidth(30),
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  w100: {
    width: '100%',
  },
  w75: {
    width: '75%',
  },
});
