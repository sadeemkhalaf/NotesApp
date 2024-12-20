import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import store, { persistor } from '@/store/store';
import '@/translations';
import { View } from 'react-native';
import { CustomText } from './components/atoms';

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <PersistGate loading={<View><CustomText text='Loading...' /></View>} persistor={persistor}>
        <Provider store={store}>
          <ThemeProvider storage={storage}>
            <ApplicationNavigator />
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </GestureHandlerRootView>
  );
}

export default App;
