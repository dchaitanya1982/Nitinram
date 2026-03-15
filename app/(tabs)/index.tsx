import React from 'react';
import { ScrollView, View, StyleSheet, Linking } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  const YOUTUBE_VIDEO_IDS = ['tMMRNZAVZcs', 'hTVmkEBKJ8k'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      {/* Intro Section */}
      <Card style={styles.card} mode="elevated">
        <Card.Cover 
           source={{ uri: 'https://nitinram.com/wp-content/uploads/2024/09/nitin-ram-homepage.jpg' }} 
           style={styles.heroImage}
        />
        <Card.Title 
          title="Seeking Ends Here" 
          subtitle="“Unshakable joy... just zero miles away”" 
          titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <Text variant="bodyLarge" style={styles.text}>
            Since 2008, Nitin Ram has been living a life totally free of suffering, by the grace of his Masters. He is dedicated to helping others achieve the same peace and freedom.
          </Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button mode="contained" onPress={() => Linking.openURL('https://nitinram.com/journey/')}>Read Journey</Button>
        </Card.Actions>
      </Card>

      {/* Video Gallery Section */}
      <View style={styles.sectionTitle}>
        <Text variant="headlineSmall" style={[styles.sectionTitleText, { color: theme.colors.primary }]}>Watch & Listen</Text>
      </View>
      {YOUTUBE_VIDEO_IDS.map((videoId) => (
         <Card key={videoId} style={styles.videoCard}>
           <YoutubePlayer
             height={200}
             play={false}
             videoId={videoId}
           />
         </Card>
      ))}

      {/* Philosophy Section */}
      <View style={styles.sectionTitle}>
        <Text variant="titleMedium" style={[styles.sectionTitleText, { color: theme.colors.primary, fontStyle: 'italic' }]}>
          “Being is ease, Becoming, a DISease.”
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Akriya Yog" titleStyle={styles.cardTitle} />
        <Card.Content>
          <Text variant="bodyLarge" style={styles.text}>
            Nitin Ram is the founder of Akriya Yog. Akriya Yog is the art of Being. It is the divine gate to the abundant and independent joy.
          </Text>
        </Card.Content>
      </Card>

      <Card style={[styles.card, styles.lastCard]}>
        <Card.Title title="Anhad Retreat" titleStyle={styles.cardTitle} />
        <Card.Content>
          <Text variant="bodyLarge" style={styles.text}>
            A gateway to life free of suffering... Ram’s way of life does not deny the world we live in. Rather, it takes the world along with us.
          </Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button mode="outlined" onPress={() => router.push('/courses')}>
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
    elevation: 2, // Softer shadow for professional look
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  lastCard: {
    marginBottom: 40,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
  cardActions: {
    paddingRight: 16,
    paddingBottom: 16,
  },
  videoCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    elevation: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  heroImage: {
    height: 250,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  sectionTitle: {
    padding: 16,
    paddingTop: 8,
    alignItems: 'center',
  },
  sectionTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 8,
    lineHeight: 24, // Increased line height for readability
    color: '#333333', // Softer black for body text
  }
});

