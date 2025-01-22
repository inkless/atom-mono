import { useEffect } from 'react';
// import Constants from 'expo-constants';
import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import { useSession } from '@/contexts/Auth';
import { getWebUrl } from '@/utils/baseUrl';

export default function EnvelopeHome() {
  const uri = `${getWebUrl()}/`;
  const { session } = useSession();

  useEffect(() => {
    if (Platform.OS !== 'web') {
      // Note, this is not very elegant, it kinda works, we may consider build a
      // custom native module instead to set cookies
      // Or maybe we should send Pull Request to react-native-webview to add
      // this functionality
      // CookieManager.set(getWebUrl(), {
      //   name: 'session',
      //   value: session ?? '',
      // }).catch(() => {
      //   // do something
      // });
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
        // This is not super reliable in Android
        // https://github.com/react-native-webview/react-native-webview/issues/1609
        // injectedJavaScript is reliable but it's always after page load.
        // injectedJavaScriptBeforeContentLoaded={`document.cookie="session=${session}"`}
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
