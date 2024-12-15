import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Text } from '~/components/Themed';

export default function DashboardScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container>
        <Text className="text-2xl font-bold">New Session</Text>
      </Container>
    </>
  );
}
