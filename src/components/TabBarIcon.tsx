import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
  size?: number;
}) => {
  return (
    <View className="mt-4 h-12 w-12 items-center justify-center">
      <AntDesign size={props.size || 24} {...props} />
    </View>
  );
};
