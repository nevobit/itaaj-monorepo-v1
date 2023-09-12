import React from 'react'
import Home from '../screens/Home';
import TapBar from '../components/Layout/TapBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Lists from '../screens/LIsts';
import Alerts from '../screens/Alerts';
import Chat from '../screens/Chat';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true
        }}
        tabBar={(props: any) => <TapBar {...props} />}>
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Listas" component={Lists} />
        <Tab.Screen name="Alertas" component={Alerts} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Cuenta" component={Home} />
      </Tab.Navigator>
    );
  };

  export const NavigatorContainer = () => {
    return <AppNavigator />;
  };