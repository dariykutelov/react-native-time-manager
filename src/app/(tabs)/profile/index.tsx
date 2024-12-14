import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View className="flex-1 items-center justify-center">
        <Text>Profile</Text>
      </View>
    </>
  );
}
