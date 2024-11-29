import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="personal_form"
        options={{
          title: 'Personal',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="education_form"
        options={{
          title: 'Educations',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
