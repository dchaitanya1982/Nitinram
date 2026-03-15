import React from 'react';
import { ScrollView, View, StyleSheet, Linking, ImageBackground, Image } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  const YOUTUBE_VIDEO_IDS = ['tMMRNZAVZcs', 'hTVmkEBKJ8k'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      {/* Hero Section Recreated to match nitinram.com exactly */}
      <View style={styles.heroContainer}>
        <ImageBackground 
          source={{ uri: 'https://nitinram.com/wp-content/uploads/2024/08/IMG_20161007_064648596_HDR-Large.jpg' }} 
          style={styles.heroBackground}
          imageStyle={styles.heroBackgroundImage}
        >
          {/* Dark overlay for text readability */}
          <View style={styles.overlay} />
          
          <View style={styles.heroContent}>
             <View style={styles.heroTextContainer}>
                <Text style={styles.heroTitle}>Experience</Text>
                <Text style={styles.heroSubtitle}>A Life</Text>
                <Text style={styles.heroMainTitle}>Totally Free</Text>
                <Text style={styles.heroMainTitle}>of Suffering!</Text>
             </View>
             
             <Image 
                source={{ uri: 'https://nitinram.com/wp-content/uploads/elementor/thumbs/nitinram-qtzn4mj68mnvj1hxlse9lva1hkinsp373fp31xyo94.png' }}
                style={styles.heroPortrait}
             />
          </View>
        </ImageBackground>
      </View>

      <Card style={styles.card} mode="elevated">
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
  heroContainer: {
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
  heroBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBackgroundImage: {
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(50, 60, 40, 0.4)', // Dark greenish tint to match site
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  heroTextContainer: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  heroSubtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d4af37', // Gold-ish color to match website
    textAlign: 'right',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  heroMainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d4af37',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  heroPortrait: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginLeft: 10,
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

