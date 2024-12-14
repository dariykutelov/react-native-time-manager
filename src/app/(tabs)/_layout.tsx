import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
      initialRouteName="dashboard/index">
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="barschart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects/index"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <TabBarIcon name="profile" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
    </Tabs>
  );
}
