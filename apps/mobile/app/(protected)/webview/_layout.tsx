import { Stack } from 'expo-router';

export default function WebviewLayout() {
  return (
    <Stack
      screenOptions={
        {
          // title: 'Webview',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }
      }
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="onboard" />
      <Stack.Screen name="change" />
    </Stack>
  );
}
