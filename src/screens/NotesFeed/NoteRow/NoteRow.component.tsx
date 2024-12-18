import type { FC } from 'react';
import React, { Fragment } from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next';
import { CustomText, Gap } from '@/components/atoms'
import { getIconByNoteType } from './notes.type'
import { Colors } from '@/theme/colors'
import { commonStyles } from '@/theme/commonStyles'
import { styles } from '../NotesFeed.styles'
import type { NotesDetails } from '../notesList/NotesList.props'

export const NoteRow: FC<{ expenseDetail: NotesDetails }> = ({ expenseDetail: { description, title } }) => {

    const { t } = useTranslation();
    return (
        <Fragment>
            <View style={[commonStyles.row, commonStyles.spaceBetween, styles.expenseRow]}>
                <View style={[commonStyles.row]} >
                    {getIconByNoteType(title)}
                    <Gap gapValue={8} type={'row'} />
                    <CustomText style={{ color: Colors.black, textTransform: 'capitalize' }} text={t(`screen.notesFeed.ExpensesTypes.${title}`)!} />
                </View>
                <CustomText preset={'fieldText'} style={{ color: Colors.green }} text={description} />
            </View>
            <Gap gapValue={12} type='col' />
        </Fragment>
    )
}
