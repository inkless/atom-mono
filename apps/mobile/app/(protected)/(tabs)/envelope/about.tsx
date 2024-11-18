import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { getBaseUrl } from '@/utils/baseUrl';

export default function EnvelopeAbout() {
  const uri = `${getBaseUrl()}/about`;
  return <WebView style={styles.container} source={{ uri }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
