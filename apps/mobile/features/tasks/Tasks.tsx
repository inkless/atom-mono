import { getTasks } from '@/apis/tasks';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native';

export function Tasks() {
  // Queries
  const query = useQuery({ queryKey: ['tasks'], queryFn: getTasks });

  if (!query.data) {
    return null;
  }

  return (
    <FlatList
      data={query.data}
      renderItem={({ item }) => (
        <ThemedView>
          <ThemedText>{item.title}</ThemedText>
          <ThemedText> - {item.status}</ThemedText>
        </ThemedView>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
