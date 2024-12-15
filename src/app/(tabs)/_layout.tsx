import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';
import { useThemeColor } from '~/components/Themed';

export default function TabLayout() {
  const color = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'secondaryBackground');
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color,
        tabBarStyle: {
          backgroundColor,
          height: 84,
          paddingHorizontal: 10,
        },
        headerShown: false,
      }}
      initialRouteName="dashboard/index">
      <Tabs.Screen
        name="dashboard/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="barschart" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="projects/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="profile" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="new-session/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="pluscircle" color={color} size={40} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
