import React from 'react';

import { useEffect } from 'react';
import { View } from 'react-native';

import { useTheme } from '@/theme';
import { Paths } from '@/navigation/paths';
import type { RootScreenProps } from '@/navigation/types';

import { AssetByVariant } from '@/components/atoms';
import { SafeScreen } from '@/components/templates';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { layout } = useTheme();
  const { loggedInState } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (loggedInState) {
        navigation.reset({
          index: 0,
          routes: [{ name: Paths.NotesFeed }],
        })
      }
      else {
        navigation.reset({
          index: 0,
          routes: [{ name: Paths.Login }],
        })
      }
      ;
    }, 1500);
  }, [loggedInState, navigation]);

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <AssetByVariant
          path={'tom'}
          resizeMode={'contain'}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </SafeScreen>
  );
}

export default Startup;
