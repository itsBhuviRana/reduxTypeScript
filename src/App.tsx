import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppDefaultTheme } from '@app/utils';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  LogBox.ignoreLogs([
    '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
    '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.'
  ]);

  return (
    <PaperProvider theme={AppDefaultTheme}>

    </PaperProvider>
  );
};

export default App;
