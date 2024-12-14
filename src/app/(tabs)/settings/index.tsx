import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Settings' }} />
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold">Settings</Text>
      </View>
    </>
  );
}
