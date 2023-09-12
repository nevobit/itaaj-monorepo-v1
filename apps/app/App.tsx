import React, { type PropsWithChildren } from 'react';
import { NavigatorContainer } from './src/navigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Search from './src/screens/Search';


const App = (): JSX.Element => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavigatorContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>

  );
};


export default App;
