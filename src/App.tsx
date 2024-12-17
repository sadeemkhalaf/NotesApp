import 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import '@/translations';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider storage={storage}>
            <ApplicationNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
