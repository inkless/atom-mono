import { Platform, Pressable, Text } from 'react-native';

type Props = {
  onPress?: () => void;
  label: string;
};

export function Button({ onPress, label }: Props) {
  let buttonPostfix = ' in Web';

  // this will be treeshaked in Web
  if (Platform.OS !== 'web') {
    buttonPostfix = '';
  }

  return (
    <Pressable
      style={{
        backgroundColor: '#20b029',
        width: 200,
        paddingVertical: 10,
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text>
        {label}
        {buttonPostfix}
      </Text>
    </Pressable>
  );
}
