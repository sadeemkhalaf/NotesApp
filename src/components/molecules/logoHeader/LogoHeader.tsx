import React from 'react'
import { Image, type ImageRequireSource, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { authStyles } from '@/screens/Login/Login.styles';
import { moderateScale } from '@/utils/appUtils';
import { CustomText } from '@/components/atoms';
import { commonStyles } from '@/theme/commonStyles';
import { useTheme } from '@/theme';
import styles from './LogoHeader.style';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store/user/user.Slice';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '@/navigation/types';
import { Paths } from '@/navigation/paths';
import type { StackNavigationProp } from '@react-navigation/stack';


const logo = require('./../../../../assets/imgs/short-logo.png') as ImageRequireSource;

const LogoHeader = ({ withLogout = false }: { withLogout?: boolean }) => {
    const { colors } = useTheme();
    const { t } = useTranslation();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, Paths.Login, undefined>>();
    const dispatch = useAppDispatch();

    const { logoutButton } = styles;

    const handleLogout = () => {
        dispatch(logout());
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: Paths.Login }],
            })
        }, 1000);
    }

    return (
        <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
            <Image resizeMode={'contain'} source={logo} style={[authStyles.headerLogo]} />
            {withLogout ? <TouchableOpacity onPress={handleLogout} style={logoutButton}>
                <Icon color={colors.purple500} name='logout' size={moderateScale(24)} />
                <CustomText text={t('screen.notesFeed.logout')} />
            </TouchableOpacity> : null}
        </View>
    )
}

export default LogoHeader;