/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TapBar = ({state, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopColor: 'rgba(0, 0, 0,0.1)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'space-around',
        paddingTop: 8,
        paddingBottom: insets.bottom + 10,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        backgroundColor: '#fff',
      }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === 'Partiaf';
        const itemColor = 'rgba(0,0,0,1)';
        const label = route.name;

        let iconName = '';
        switch (route.name) {
          case 'Buscar':
            iconName = focused ? 'ios-search' : 'ios-search-outline';
            break;
          case 'Listas':
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            break;
          case 'Alertas':
            iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            break;
          case 'Chat':
            iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
            break;
          case 'Cuenta':
            iconName = focused ? 'ios-user' : 'ios-user';
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View key={route.name}>
            <TouchableOpacity onPress={onPress}>
              {route.name == 'Cuenta' ? (
                <View style={{
                  alignItems: 'center'
                }}>

                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: iconName,
                  }}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={{
                      uri:  'https://i.postimg.cc/0jMMGxbs/default.jpg',
                    }}
                  />
                </View>
                <Text style={{
                      fontSize: 12
                    }}>{label}</Text>
                </View>

              ) : (
                <View style={{alignItems: 'center'}}>
                    <Icon name={iconName} size={25} color="#333" />
                    <Text style={{
                      fontSize: 12
                    }}>{label}</Text>
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default TapBar;