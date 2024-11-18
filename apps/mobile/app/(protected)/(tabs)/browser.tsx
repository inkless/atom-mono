import { StyleSheet, Pressable } from 'react-native';

import { createURL, parse } from 'expo-linking';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { getBaseUrl } from '@/utils/baseUrl';
import { openBrowserAsync } from 'expo-web-browser';

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
        <Pressable
          style={{
            backgroundColor: '#20b029',
            width: 200,
            paddingVertical: 10,
            alignItems: 'center',
          }}
          onPress={openBrowserCheckout}
        >
          <ThemedText>Open Checkout</ThemedText>
        </Pressable>
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
