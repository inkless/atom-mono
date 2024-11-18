import { WebView } from 'react-native-webview';
import { router, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { getBaseUrl } from '@/utils/baseUrl';

export default function ChangeScreen() {
  const uri = `${getBaseUrl()}/`;
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <WebView
        style={styles.container}
        source={{ uri }}
        injectedJavaScriptObject={{ supportBack: true }}
        onMessage={(evt) => {
          if (evt.nativeEvent.data === 'Back') {
            router.back();
          }
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
