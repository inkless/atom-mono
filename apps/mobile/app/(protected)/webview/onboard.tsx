import { WebView } from 'react-native-webview';
import { router, Stack } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { getWebUrl } from '@/utils/baseUrl';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function OnboardScreen() {
  const uri = `${getWebUrl()}/onboard`;
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.back();
                // router.push('/');
              }}
            >
              <IconSymbol size={29} color="#333" name="chevron.left" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.back();
              }}
            >
              <IconSymbol size={29} color="#333" name="xmark" />
            </Pressable>
          ),
        }}
      />
      <WebView style={styles.container} source={{ uri }} />
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
