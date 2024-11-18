import { WebView } from 'react-native-webview';
// import Constants from 'expo-constants';
import { Platform, StyleSheet } from 'react-native';
import { getBaseUrl } from '@/utils/baseUrl';
import { Stack } from 'expo-router';
import { useSession } from '@/contexts/Auth';
import { useEffect } from 'react';
import CookieManager from '@react-native-cookies/cookies';

export default function EnvelopeHome() {
  const uri = `${getBaseUrl()}/`;
  const { session } = useSession();

  useEffect(() => {
    if (Platform.OS !== 'web') {
      CookieManager.set(getBaseUrl(), {
        name: 'session',
        value: session || '',
      });
    }
  }, [session]);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Envelope Home',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <WebView
        style={styles.container}
        source={{
          uri,
        }}
        // injectedJavaScriptBeforeContentLoaded={`document.cookie="session=${session}"`}
        sharedCookiesEnabled={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
