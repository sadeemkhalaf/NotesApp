import { View } from "react-native";
import type { FC } from "react";
import React, { useState } from "react";
import { t } from "i18next";
import { CustomButton, CustomText, Gap } from "@/components/atoms";
import { CustomTextField } from "@/components/molecules";
import { moderateScale } from "@/utils/appUtils";
import { Colors } from "@/theme/colors";
import { commonStyles } from "@/theme/commonStyles";
import type { NoteCategoryDetails } from "@/utils/types";
import styles from "./AddNewModalContent.style";

export const AddNewModalContent: FC<{ onSubmitAddNew: (data: NoteCategoryDetails) => void }> = ({ onSubmitAddNew }) => {
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const { textArea } = styles;

    return (
        <View style={[{ paddingVertical: moderateScale(24) }, commonStyles.w100, commonStyles.flex1, commonStyles.spaceBetween]}>
            <View style={[commonStyles.w100, commonStyles.alignItems]}>
                <CustomText preset={'subheaderBold'} style={{ color: Colors.black }} text={t('screen.notesFeed.add-new')!} />
                <Gap gapValue={24} type={'col'} />
                <CustomTextField label={t('screen.notesFeed.title')}
                    maxLength={10}
                    onChangeText={(text) => setTitle(text)}
                    placeholder={t('screen.notesFeed.title')!}
                    style={[commonStyles.w75]}
                    textAlign={'center'}
                    value={title}
                />
                <Gap gapValue={16} type={'col'} />
                <CustomTextField inputStyle={[textArea]}
                    label={t('screen.notesFeed.Notes')}
                    maxLength={20}
                    multiline={true}
                    onChangeText={(text) => setDescription(text)}
                    placeholder={t('screen.notesFeed.Notes')!}
                    style={[commonStyles.w75]}
                    textAlign={'center'}
                    value={description}
                />
            </View>
            <CustomButton
                onPress={() => onSubmitAddNew({ createdOn: new Date().toISOString(), description, title })}
                text={t('screen.notesFeed.confirm')!} />
        </View>
    );
};
