import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { IconSymbol } from './ui/IconSymbol';

interface Props {
  name: string;
}

export function UserAvatar({ name }: Props) {
  return (
    <ThemedView>
      <IconSymbol size={28} name="person.fill" color={'#333'} />
      <ThemedText>{name}</ThemedText>
    </ThemedView>
  );
}
