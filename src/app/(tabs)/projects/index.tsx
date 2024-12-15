import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Text } from '~/components/Themed';
export default function ProjectsScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container>
        <Text className="text-2xl font-bold">Projects</Text>
      </Container>
    </>
  );
}
