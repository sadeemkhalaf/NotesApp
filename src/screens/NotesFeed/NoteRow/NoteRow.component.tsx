import type { FC } from 'react';
import React, { Fragment } from 'react'
import { View } from 'react-native'
import { CustomText, Gap } from '@/components/atoms'
import { getIconByNoteType } from './notes.type'
import { Colors } from '@/theme/colors'
import { commonStyles } from '@/theme/commonStyles'
import { styles } from '../NotesFeed.styles'
import type { Note } from '@/store/notes/notes.Slice';

export const NoteRow: FC<{ NoteDetail: Note }> = ({ NoteDetail: { description, status, title } }) => {

    return (
        <Fragment>
            <View style={[commonStyles.row, commonStyles.spaceBetween, styles.NoteRow]}>
                <View style={[commonStyles.row]} >
                    {getIconByNoteType(status)}
                    <Gap gapValue={8} type={'row'} />
                    <CustomText style={{ color: Colors.black, textTransform: 'capitalize' }} text={status} />
                </View>
                <CustomText preset={'bold'} style={{ color: Colors.black }} text={title} />
                <CustomText preset={'fieldText'} style={{ color: Colors.green }} text={description} />
            </View>
            <Gap gapValue={12} type='col' />
        </Fragment>
    )
}
