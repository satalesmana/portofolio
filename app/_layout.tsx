import { Stack } from "expo-router";
import store from '../store'
import { Provider } from 'react-redux'

export const unstable_settings = {
  initialRouteName: "account",
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack initialRouteName="account">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
