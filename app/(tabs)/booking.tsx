import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function BookingScreen() {
  const theme = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Try to default to course selected from CoursesScreen if provided
  const initialCourse = params.courseSelected ? String(params.courseSelected) : '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(initialCourse);
  const [message, setMessage] = useState('');

  const handleBooking = () => {
    if (!name || !email || !course) {
      if (Platform.OS === 'web') {
        window.alert('Please fill out name, email, and course.');
      } else {
        Alert.alert('Missing Fields', 'Please fill out name, email, and course.');
      }
      return;
    }

    if (Platform.OS === 'web') {
      window.alert(`Thank you ${name}, your request for ${course} has been submitted! (Mocked submission)`);
      router.push('/');
    } else {
      Alert.alert(
        'Booking Request Sent',
        `Thank you ${name}, your request for ${course} has been submitted! (Mocked submission)`,
        [{ text: 'OK', onPress: () => router.push('/') }]
      );
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>Book a Retreat</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Are you ready for Inner Adventure? Submit your request below.
        </Text>

        <TextInput
          label="Full Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Course / Retreat Interested In"
          value={course}
          onChangeText={setCourse}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Message or Questions"
          value={message}
          onChangeText={setMessage}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.input}
        />

        <Button 
          mode="contained" 
          onPress={handleBooking} 
          style={styles.button}
        >
          Submit Booking Request
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
    color: '#555',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    paddingVertical: 6,
  }
});
