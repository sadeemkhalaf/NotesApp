import type { FC } from 'react';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import _ from 'lodash';
import { Colors } from '@/theme/colors';
import { commonStyles } from '@/theme/commonStyles';
import { CustomTextField } from '@/components/molecules';
import { CustomText, Gap } from '@/components/atoms';
import type { RootState } from '@/store/rootReducer';
import { formatDateKeyByLang, moderateScale } from '@/utils/appUtils';
import type { Note } from '@/store/notes/types';

export const NotesList: FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    const [searchTxt, setSearchTxt] = useState<string>('');
    // const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);
    const [groupedNotesKeys, setGroupedNotesKeys] = useState<string[]>([]);
    const [groupedNotes, setGroupedNotes] = useState<Record<string, Note[]>>({});
    const [refreshing, setRefreshing] = useState(false);

    // Group notes by date
    const groupByDate = useCallback((notesList: Note[]) => {
        const groupedByDate = _.groupBy(notesList, (note) =>
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
                const filtered = notes.filter((note) =>
                    note.title.toLowerCase().includes(text.toLowerCase()) ||
                    note.description.toLowerCase().includes(text.toLowerCase())
                );
                // setFilteredNotes(filtered);
                groupByDate(filtered);
            } else {
                // setFilteredNotes(notes);
                groupByDate(notes);
            }
        },
        [notes, groupByDate]
    );

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // setFilteredNotes(notes);
        groupByDate(notes);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    }, [notes, groupByDate]);

    useEffect(() => {
        // setFilteredNotes(notes);
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
                        {groupedNotes[item]?.map((note: Note, key: number) => (
                            <View
                                key={key}
                                style={{
                                    backgroundColor: Colors.lightGrey,
                                    borderRadius: 8,
                                    marginVertical: 4,
                                    padding: 12,
                                }}
                            >
                                <CustomText preset={'bold'} text={note.title} />
                                <CustomText text={note.description} />
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
