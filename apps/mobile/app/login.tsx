import { Platform, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSession } from '@/contexts/Auth';
import { useBrowserSignIn } from '@/hooks/useBrowserSignIn';

export default function SignIn() {
  const { signIn } = useSession();
  const browserSignIn = useBrowserSignIn();
  const { access_token } = useLocalSearchParams();
  return (
    <ThemedView style={styles.container}>
      {access_token && (
        <ThemedView>
          <ThemedText>{access_token}</ThemedText>
        </ThemedView>
      )}
      <ThemedText
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}
      >
        Sign In
      </ThemedText>
      {Platform.OS !== 'web' && (
        <ThemedText onPress={browserSignIn}>Sign In with Browser</ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
