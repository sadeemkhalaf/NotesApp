import { StyleSheet } from 'react-native';
import { scaleByHeight, scaleByWidth } from '../../utils/appUtils';

export const authStyles = StyleSheet.create({
  absoluteIcon: {
    position: 'absolute',
    right: 0,
  },
  changeLanguageContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerLogo: {
    height: scaleByHeight(30),
    width: scaleByWidth(50),
  }
});
