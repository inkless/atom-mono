import { StyleSheet, Image, Platform } from 'react-native';

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
          color="red"
          name="envelope.open"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Envelope</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>Envelope Home</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>Envelope About</ThemedText>
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
});
