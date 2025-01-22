import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import { getWebUrl } from '@/utils/baseUrl';

export default function EnvelopeHome() {
  const uri = `${getWebUrl()}/`;

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
