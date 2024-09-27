import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="account" >
      <Stack.Screen 
        name="account" 
        options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
