import type { FC } from 'react';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { t } from 'i18next';
import Icon from 'react-native-vector-icons/Feather';
import { NotesList } from './notesList/NotesList.component';
import { AddNewModalContent } from './AddNewModalContent';
import { CustomText, Gap } from '@/components/atoms';
import { commonStyles } from '@/theme/commonStyles';
import { scaleByHeight, scaleByWidth } from '@/utils/appUtils';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { type NoteCategoryDetails, NoteCategoryEnums } from '@/utils/types';
import { SafeScreen } from '@/components/templates';
import { CustomPopupModal } from '@/components/organisms';
import { LogoHeader } from '@/components/molecules';
import { addNote } from '@/store/notes/notes.Slice';
import { useTheme } from '@/theme';

const NotesFeed: FC = () => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [NotesModalVisible, setNotesModalVisible] = useState<boolean>(false);

  const onSubmitAddNew = (data: NoteCategoryDetails) => {
    if (data.description.length && data.title.length) {
      dispatch(addNote({
        ...data, description: data.description, dueDate: '', id: (Math.random() * 900),
        status: NoteCategoryEnums.TODO,
        title: data.title
      }));
      setNotesModalVisible(false);
    }
  };

  return (
    <SafeScreen
      style={{ paddingHorizontal: scaleByWidth(30) }}
    >
      <Gap gapValue={24} type={'col'} />
      <LogoHeader withLogout />
      <Gap gapValue={16} type={'col'} />
      <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
        <CustomText preset={'headerBold'} text={t('screen.notesFeed.dashboard')} />
        <TouchableOpacity onPress={() => setNotesModalVisible(true)} style={[commonStyles.flex, commonStyles.row]}>
          <CustomText preset={'bold'} style={{ color: Colors.primary }} text={t('screen.notesFeed.new')} />
          <Icon color={colors.purple100} name={'plus'} />
        </TouchableOpacity>
      </View>
      <Gap gapValue={16} type={'col'} />

      <NotesList />

      {/* Add New modal */}
      <CustomPopupModal
        height={scaleByHeight(340)}
        onModalClose={() => setNotesModalVisible(false)}
        visible={NotesModalVisible}>
        <AddNewModalContent onSubmitAddNew={onSubmitAddNew} />
      </CustomPopupModal>
    </SafeScreen>
  );
};

export default NotesFeed;
