import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert, Linking, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme, Card, List } from 'react-native-paper';

export default function ContactScreen() {
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInquiry = () => {
    if (!name || !email || !message) {
      if (Platform.OS === 'web') {
        window.alert('Please fill out all fields.');
      } else {
        Alert.alert('Missing Fields', 'Please fill out all fields.');
      }
      return;
    }

    if (Platform.OS === 'web') {
      window.alert(`Thank you ${name}, your message has been sent! (Mocked submission)`);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert(
        'Inquiry Sent',
        `Thank you ${name}, your message has been sent! (Mocked submission)`,
        [{ text: 'OK', onPress: () => {
           setName('');
           setEmail('');
           setMessage('');
        }}]
      );
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>Contact & Feedback</Text>
        
        <Card style={styles.card}>
          <Card.Content>
            <List.Item
              title="Email"
              description="info@nitinram.com"
              left={props => <List.Icon {...props} icon="email" />}
              onPress={() => Linking.openURL('mailto:info@nitinram.com')}
            />
            <List.Item
              title="WhatsApp"
              description="+91 72630 70877"
              left={props => <List.Icon {...props} icon="whatsapp" />}
              onPress={() => Linking.openURL('https://wa.me/+917263070877')}
            />
          </Card.Content>
        </Card>

        <Text variant="titleMedium" style={styles.formTitle}>Send an Inquiry</Text>
        <TextInput
          label="Your Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Message / Feedback"
          value={message}
          onChangeText={setMessage}
          mode="outlined"
          multiline
          numberOfLines={5}
          style={styles.input}
        />

        <Button 
          mode="contained" 
          onPress={handleInquiry} 
          style={styles.button}
        >
          Send Message
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
    marginBottom: 16,
    color: '#1B5E20', // Forest green
  },
  card: {
    marginBottom: 24,
  },
  formTitle: {
    marginTop: 8,
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    paddingVertical: 6,
    backgroundColor: '#D35400', // Saffron orange button
  }
});
