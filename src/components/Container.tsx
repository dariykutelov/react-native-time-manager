import { SafeAreaView } from 'react-native';

import { View } from '~/components/Themed';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="flex-1">
      <SafeAreaView className="m-4 flex-1">{children}</SafeAreaView>
    </View>
  );
};
