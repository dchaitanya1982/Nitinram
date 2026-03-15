import React from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card}>
        <Card.Title title="Seeking Ends Here" subtitle="“Unshakable joy... just zero miles away”" />
        <Card.Cover 
           source={{ uri: 'https://nitinram.com/wp-content/uploads/2021/04/NitinRam_12.jpg' }} 
           style={styles.heroImage}
        />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Since 2008, Nitin Ram has been living a life totally free of suffering, by the grace of his Masters. He is dedicated to helping others achieve the same peace and freedom.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => Linking.openURL('https://nitinram.com/journey/')}>Read Journey</Button>
        </Card.Actions>
      </Card>

      <View style={styles.sectionTitle}>
        <Text variant="headlineSmall" style={styles.sectionTitleText}>“Being is ease, Becoming, a DISease.”</Text>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Akriya Yog" />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Nitin Ram is the founder of Akriya Yog. Akriya Yog is the art of Being. It is the divine gate to the abundant and independent joy.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Anhad Retreat" />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            A gateway to life free of suffering... Ram’s way of life does not deny the world we live in. Rather, it takes the world along with us.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => router.push('/courses')}>
            View Upcoming Retreats
          </Button>
        </Card.Actions>
      </Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  heroImage: {
    height: 200,
  },
  sectionTitle: {
    padding: 16,
    alignItems: 'center',
  },
  sectionTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 8,
    lineHeight: 22,
  }
});
