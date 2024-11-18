import { WebView } from 'react-native-webview';
// import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { getBaseUrl } from '@/utils/baseUrl';

export default function EnvelopeHome() {
  const uri = `${getBaseUrl()}/`;
  return <WebView style={styles.container} source={{ uri }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
