import React from 'react'
import { Image, type ImageRequireSource } from 'react-native';
import { authStyles } from '@/screens/Login/Login.styles';


const logo = require('./../../../../assets/imgs/short-logo.png') as ImageRequireSource;

const LogoHeader = () => {
    return (
        <Image resizeMode={'contain'} source={logo} style={[authStyles.headerLogo]} />
    )
}

export default LogoHeader;