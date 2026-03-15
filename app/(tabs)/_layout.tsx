import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D35400',   // Saffron Orange – spiritual & warm
    accent: '#1B5E20',    // Deep Forest Green – nature & peace
    background: '#FFF8F0', // Warm Cream background
    surface: '#ffffff',
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={theme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Nitin Ram',
            tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="courses"
          options={{
            title: 'Retreats',
            tabBarIcon: ({ color }) => <Icon name="calendar-text" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            title: 'Book Retreat',
            tabBarIcon: ({ color }) => <Icon name="clipboard-list" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
            tabBarIcon: ({ color }) => <Icon name="email-outline" size={24} color={color} />,
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
