import type { FC } from 'react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import _ from 'lodash';
import { Colors } from '@/theme/colors';
import { commonStyles } from '@/theme/commonStyles';
import { CustomTextField } from '@/components/molecules';
import { CustomButton, CustomText, Gap } from '@/components/atoms';
import { formatDateKeyByLang, moderateScale } from '@/utils/appUtils';
import { deleteNote, editNote, Note } from '@/store/notes/notes.Slice';
import { RootState } from '@/store/store';
import { NoteCategoryEnums } from '@/utils/types';
import { useAppDispatch } from '@/hooks';

export const NotesList: FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);
    const dispatch = useAppDispatch();

    const [searchTxt, setSearchTxt] = useState<string>('');

    const [groupedNotesKeys, setGroupedNotesKeys] = useState<string[]>([]);
    const [groupedNotes, setGroupedNotes] = useState<Record<string, Note[]>>({});
    const [refreshing, setRefreshing] = useState(false);

    // Group notes by createdDate
    const groupByDate = useCallback((notesList: Note[]) => {
        const groupedByDate = _.groupBy(notesList, (note: Note) =>
            formatDateKeyByLang(note?.createdOn || '', 'en')
        );
        setGroupedNotes(groupedByDate);
        setGroupedNotesKeys(Object.keys(groupedByDate));
    }, []);

    // Filter notes based on search
    const filterNotes = useCallback(
        (text: string) => {
            setSearchTxt(text);
            if (text.length >= 3) {
                const filtered = notes.filter((note: Note) =>
                    note.title.toLowerCase().includes(text.toLowerCase()) ||
                    note.description.toLowerCase().includes(text.toLowerCase())
                );
                groupByDate(filtered);
            } else {
                groupByDate(notes);
            }
        },
        [notes, groupByDate]
    );

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        groupByDate(notes);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    }, [notes, groupByDate]);

    const updateStatus = (status: NoteCategoryEnums) => {
        switch (status) {
            case NoteCategoryEnums.TODO:
                return NoteCategoryEnums.IN_PROGRESS;
            case NoteCategoryEnums.IN_PROGRESS:
                return NoteCategoryEnums.DONE
            case NoteCategoryEnums.DONE:
                return NoteCategoryEnums.TODO
            default:
                return NoteCategoryEnums.TODO
        }
    }

    const handleNoteStatusUpdate = (note: Note) => {
        // Dispatch the editNote action
        dispatch(
            editNote({
                ...note,
                status: updateStatus(note.status),
            })
        );
    }

    const handleDeleteNote = (note: Note) => {
        dispatch(deleteNote(note.id));
    }

    useEffect(() => {
        groupByDate(notes);
    }, [notes, groupByDate]);

    return (
        <View style={[commonStyles.flex1]}>
            {/* Search Bar */}
            <View style={[commonStyles.flex, commonStyles.row, { direction: 'ltr' }]}>
                <Icon
                    color={Colors.grey}
                    name={'search'}
                    size={moderateScale(20)}
                    style={{ left: 8, position: 'absolute', top: 12 }}
                />
                <CustomTextField
                    inputStyle={{ borderBottomWidth: 0, textAlign: 'left' }}
                    onChangeText={filterNotes}
                    placeholder={'Search notes...'}
                    style={[commonStyles.flex1]}
                    value={searchTxt}
                />
            </View>
            <Gap gapValue={16} type={'col'} />

            {/* Notes List */}
            <FlatList
                data={groupedNotesKeys}
                keyExtractor={(item) => item}
                ListEmptyComponent={() => (
                    <View style={[commonStyles.flex, commonStyles.alignItems, commonStyles.justifyCenter]}>
                        <Icon color={Colors.primary} name={'meh'} size={moderateScale(40)} />
                        <Gap gapValue={8} type={'col'} />
                        <CustomText style={{ textAlign: 'center' }} text={'No notes available'} />
                    </View>
                )}
                refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
                renderItem={({ item }) => (
                    <Fragment>
                        {/* Group Header */}
                        <View style={[commonStyles.flex, commonStyles.row, commonStyles.spaceBetween]}>
                            <CustomText preset={'bold'} text={`Date: ${item}`} />
                        </View>
                        <Gap gapValue={8} type={'col'} />

                        {/* Render Notes */}
                        {groupedNotes[item]?.map((note: Note) => (
                            <View
                                key={note.id}
                                style={{
                                    backgroundColor: Colors.lightGrey,
                                    borderRadius: 8,
                                    marginVertical: 4,
                                    padding: 12,
                                }}
                            >
                                <CustomText preset={'bold'} text={note.title} />
                                <CustomText text={note.description} />
                                {/* progress status action button */}
                                <CustomButton
                                    onPress={() => handleNoteStatusUpdate(note)} text={note.status}
                                    style={{ backgroundColor: note.status === NoteCategoryEnums.DONE ? Colors.green : (note.status === NoteCategoryEnums.IN_PROGRESS ? Colors.purple : Colors.grey) }}
                                />
                                <Icon.Button
                                    color={Colors.red}
                                    name={'delete'}
                                    size={moderateScale(20)}
                                    onPress={() => handleDeleteNote(note)}
                                />
                            </View>
                        ))}
                        <Gap gapValue={16} type={'col'} />
                    </Fragment>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
