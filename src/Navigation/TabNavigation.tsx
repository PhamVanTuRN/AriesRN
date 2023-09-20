import HomeScreen from '@/Screens/DrawerMenu/HomeScreen/HomeScreen';
import FavoriteScreen from '@/Screens/TabScreens/FavoriteScreen';
import ChatScreen from '@/Screens/TabScreens/ChatScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// AntDesign.loadFont();
import Icon from 'react-native-vector-icons/Ionicons';
// Icon.loadFont();
import Colors from '@/Themes/Colors';
import ProfileScreen from '@/Screens/DrawerMenu/ProfileScreen/ProfileScreen';
import MessagesScreen from '@/Screens/TabScreens/MessagesScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#F14506',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: Colors.navy,
        },
      })}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tin nhắn"
        component={ChatScreen}
        options={
          {
            tabBarIcon: ({color, size}) => (
              <Icon name="chatbox-ellipses-outline" color={color} size={size} />
            ),
          }
        }
      />
      <Tab.Screen
        name="Công việc"
        component={FavoriteScreen}
        options={
          {
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="tasks" color={color} size={size} />
            ),
          }
        }
      />
      <Tab.Screen
        name="Thêm"
        component={MessagesScreen}
        options={
          {
            tabBarIcon: ({color, size}) => (
              <Icon name="settings-outline" color={color} size={size} />
            ),
          }
        }
      />
    </Tab.Navigator>
  );
}
