import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Divider, Text, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

const UPCOMING_COURSES = [
  { id: '1', title: 'Anhad Retreat', dates: '7 August 2025 To 10 August 2025' },
  { id: '2', title: 'Anhad Retreat', dates: '14 August 2025 To 17 August 2025' },
  { id: '3', title: 'Anhad Retreat', dates: '21 August 2025 To 24 August 2025' },
  { id: '4', title: 'Anhad Retreat', dates: '28 August 2025 To 31 August 2025' },
  { id: '5', title: 'Anhad Retreat', dates: '4 September 2025 To 7 September 2025' },
  { id: '6', title: 'Advance Himalayan Retreat', dates: '5 October 2025 To 12 October 2025' },
];

export default function CoursesScreen() {
  const theme = useTheme();
  const router = useRouter();

  const renderItem = ({ item }: { item: { id: string, title: string, dates: string } }) => (
    <List.Item
      title={item.title}
      description={item.dates}
      left={props => <List.Icon {...props} icon="calendar" color={theme.colors.primary} />}
      right={props => (
        <Button 
          mode="text" 
          onPress={() => router.push({ pathname: '/booking', params: { courseSelected: item.title + ' - ' + item.dates } })}
        >
          Book
        </Button>
      )}
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text variant="titleMedium">Hidden fragrance ! “The seed may not be aware of the infinite possibilities hidden within it. But thankfully the Gardener knows the art and the technique!” - Nitin Ram</Text>
      </View>
      <FlatList
        data={UPCOMING_COURSES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#e6f0ff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});
