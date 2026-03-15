import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import BookingScreen from './src/screens/BookingScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

// Custom Theme
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#005b9f',
    accent: '#f1c40f',
    background: '#f9f9f9',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home';
              else if (route.name === 'Courses') iconName = 'calendar-text';
              else if (route.name === 'Booking') iconName = 'clipboard-list';
              else if (route.name === 'Contact') iconName = 'email-outline';

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Nitin Ram' }} />
          <Tab.Screen name="Courses" component={CoursesScreen} options={{ title: 'Retreats' }} />
          <Tab.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Retreat' }} />
          <Tab.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
