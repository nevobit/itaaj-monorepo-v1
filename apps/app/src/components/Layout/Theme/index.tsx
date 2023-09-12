/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SafeAreaView,
    StyleProp,
    ViewStyle,
    ScrollView,
    StatusBar,
    View as DefaultView,
  } from 'react-native';
  import {ReactNode} from 'react';
  import {useSafeAreaInsets} from 'react-native-safe-area-context';
  
  interface Props {
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
  }
  
  export const View = ({style, children}: Props) => {
    const {top} = useSafeAreaInsets();
    return (
      <SafeAreaView
        style={[
          {
            width: '100%',
            backgroundColor: '#000',
          },
          style,
        ]}>
            <StatusBar translucent barStyle="light-content" backgroundColor="#000"  />
        {children}
      </SafeAreaView>
    );
  };