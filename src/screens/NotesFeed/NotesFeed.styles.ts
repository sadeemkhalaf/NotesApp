import { StyleSheet } from 'react-native';
import { Colors } from '@/theme/colors';
import { moderateScale, scaleByHeight, scaleByWidth } from '@/utils/appUtils';

export const styles = StyleSheet.create({
  absoluteIcon: {
    position: 'absolute',
    right: moderateScale(32),
    zIndex: 1000,
  },

  absoluteIconRtl: {
    left: moderateScale(32),
    position: 'absolute',
    zIndex: 1000,
  },

  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownButtonStyle: {
    alignItems: 'center',
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 12,
    width: 200,
  },
  dropdownButtonTxtStyle: {
    color: '#151E26',
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownItemStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
  },
  dropdownItemTxtStyle: {
    color: '#151E26',
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  NoteRow: {
    backgroundColor: Colors.mainGrey,
    borderRadius: moderateScale(13),
    paddingHorizontal: scaleByWidth(16),
    paddingVertical: scaleByWidth(18),
  },
  noteRowElement: { borderColor: Colors.grey, borderRadius: moderateScale(8), borderWidth: 1, marginVertical: scaleByHeight(8), padding: moderateScale(8) },
  searchbox: {
    backgroundColor: Colors.layout,
    borderRadius: moderateScale(8),
  }
});
