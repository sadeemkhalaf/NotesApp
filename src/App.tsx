import 'react-native-gesture-handler';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import '@/translations';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
          <ThemeProvider storage={storage}>
            <ApplicationNavigator />
          </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
