import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function EnvelopeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f5501d', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#bf221d"
          name="envelope"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Envelope</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link style={styles.link} href="/envelope/home" asChild>
          <Pressable> Envelope Home with Cookie Share</Pressable>
        </Link>
      </ThemedView>
      <ThemedView>
        <Link style={styles.link} href="/envelope/about">
          Envelope About
        </Link>
      </ThemedView>
      <ThemedView>
        <Link style={styles.link} href="/webview/change">
          Full Screen Envelope Home
        </Link>
      </ThemedView>
      <ThemedView>
        <Link style={styles.link} href="/webview/onboard">
          Full Screen Envelope Onboard Custom Header
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  link: {
    backgroundColor: '#f5501d',
    padding: 10,
  },
});
