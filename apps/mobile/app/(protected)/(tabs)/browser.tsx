import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { getBaseUrl } from '@/utils/baseUrl';
import { openBrowserAsync } from 'expo-web-browser';
import { Button } from '@atom/ui-components';

export default function BrowserScreen() {
  const openBrowserCheckout = async () => {
    const checkoutUrl = `${getBaseUrl()}/checkout`;
    await openBrowserAsync(checkoutUrl);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#99f09f', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#20b029"
          name="network"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Browser</ThemedText>
      </ThemedView>
      <ThemedView>
        <Button onPress={openBrowserCheckout} label="Open Checkout" />
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
