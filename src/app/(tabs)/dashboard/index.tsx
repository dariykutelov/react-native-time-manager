import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function DashboardScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Dashboard' }} />
      <View className="flex-1 bg-white p-6">
        <Text className="text-2xl font-bold">Dashboard</Text>
      </View>
    </>
  );
}
