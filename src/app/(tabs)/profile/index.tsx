import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Text } from '~/components/Themed';
export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container>
        <Text className="text-2xl font-bold">Profile</Text>
      </Container>
    </>
  );
}
