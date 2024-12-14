import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProjectsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Projects' }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold">Projects</Text>
      </View>
    </>
  );
}
