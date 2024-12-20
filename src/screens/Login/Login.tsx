import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';

import { useTheme } from '@/theme';
import { useAppDispatch, useI18n } from '@/hooks';

import { CustomButton, CustomText, Gap, IconByVariant } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';
import { CustomTextField, LogoHeader } from '@/components/molecules';
import { commonStyles } from '@/theme/commonStyles';
import { moderateScale, scaleByWidth } from '@/utils/appUtils';
import { Colors } from '@/theme/colors';
import { authStyles } from './Login.styles';
import { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';
import { login } from '@/store/user/user.Slice';
import { setLanguage } from '@/store/language/language.Slice';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { SupportedLanguages } from '@/hooks/language/schema';

type FormValues = {
  email: string;
  password: string;
};

function Login({ navigation }: RootScreenProps<Paths.Login>) {
  const { t } = useTranslation();
  const { toggleLanguage, changeLanguage } = useI18n();
  const dispatch = useAppDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const { control, formState: { errors }, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {
    colors,
    gutters,
  } = useTheme();

  const handleLogin = () => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.NotesFeed }],
      });
    }, 200);
  }

  const onSubmit = (data: FormValues) => {
    // console.log('errors: ', errors, data);
    dispatch(login(data.email)); // Login user
    handleLogin();
  };

  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)

  const handleChangeLanguage = () => {
    toggleLanguage();
    changeLanguage(language == 'ar' ? SupportedLanguages.EN_EN : SupportedLanguages.AR_AR);
    dispatch(setLanguage(language == 'ar' ? SupportedLanguages.EN_EN : SupportedLanguages.AR_AR));
  }

  return (
    <SafeScreen
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <LogoHeader />
      <View style={authStyles.changeLanguageContainer}>
        <CustomText preset={'calloutLabel'} text={t('screen.login.change-language')!} />
        <TouchableOpacity
          onPress={handleChangeLanguage}
          style={[gutters.marginHorizontal_12]}
          testID="change-language-button"
        >
          <IconByVariant path={'language'} stroke={colors.purple500} />
        </TouchableOpacity>
      </View>
      <View style={[commonStyles.flex, commonStyles.flex1, commonStyles.justifyCenter]}>
        <CustomText preset={'headerBold'} text={t('screen.login.welcome')!} />
        <Gap gapValue={16} type={'col'} />
        <Controller
          control={control}
          name={"email"}
          render={({ field: { onBlur, onChange, value } }) => (
            <CustomTextField onBlur={onBlur} onChangeText={onChange}
              placeholder={t('screen.login.email')!}
              value={value} />
          )}
          rules={{
            pattern: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
            required: true,
          }}
        />
        {errors.email && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("common.errors.required-field")!} />}

        <View style={[commonStyles.flex, commonStyles.row]}>
          <Controller
            control={control}
            name={"password"}
            render={({ field: { onBlur, onChange, value } }) => (
              <CustomTextField onBlur={onBlur}
                onChangeText={onChange}
                placeholder={t('screen.login.password')!}
                secureTextEntry={passwordVisible}
                style={[commonStyles.flex1]}
                value={value} />
            )}
            rules={{
              required: true
            }}
          />
          <Icon
            color={Colors.black}
            name={passwordVisible ? 'eye' : 'eye-off'}
            onPress={togglePasswordVisibility}
            size={moderateScale(16)}
            style={[authStyles.absoluteIcon]} />
        </View>
        {errors.password && <CustomText preset={'calloutLabel'} style={{ color: Colors.red }} text={t("common.errors.min-length", { count: 8 })!} />}

      </View>
      <CustomButton onPress={handleSubmit(onSubmit)} text={t('screen.login.login')!} />
      <Gap gapValue={36} type={'col'} />
    </SafeScreen>
  );
}

export default Login;
