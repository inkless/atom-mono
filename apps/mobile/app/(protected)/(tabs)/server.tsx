import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UserProfile } from '@/features/tasks/UserProfile';
import { Tasks } from '@/features/tasks/Tasks';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ServerScreen() {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <ThemedView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Server</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText>Server Route with ID: {id}</ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </ThemedView>
      </ThemedView>
      <Collapsible title="UserProfile">
        <UserProfile />
      </Collapsible>

      <ThemedView style={{ paddingTop: 16 }}>
        <ThemedText type="title">Tasks</ThemedText>
      </ThemedView>
      <Tasks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
