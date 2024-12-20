import {StyleSheet} from 'react-native';
import {Colors} from '@/theme/colors';
import {
  moderateScale,
  scaleByHeight,
  scaleByWidth,
  screenWidth,
} from '@/utils/appUtils';

export const styles = StyleSheet.create({
  handlerStyle: {
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(25),
    height: scaleByHeight(6),
    left: '50%',
    position: 'absolute',
    right: '50%',
    top: scaleByHeight(12),
    width: scaleByWidth(50),
  },
  modalContainer: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  modalInnerContainer: {
    alignItems: 'center',
    borderRadius: moderateScale(20),
    display: 'flex',
    justifyContent: 'space-between',
    marginHorizontal: scaleByWidth(30),
    paddingHorizontal: scaleByWidth(30),
    width: screenWidth - moderateScale(60),
  },
  view: {
    height: scaleByHeight(300),
    justifyContent: 'flex-end',
    margin: 0,
  },
});
