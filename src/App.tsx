import React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import store, { persistor } from '@/store/store';
import '@/translations';

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
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
