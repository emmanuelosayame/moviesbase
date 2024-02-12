import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, Tabs } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, useThemeColor } from '@/components/Themed';

const BottomBar = () => {
  const backgroundColor = useThemeColor({ light: '', dark: '' }, 'background');
  const color = useThemeColor({ light: 'white', dark: 'white' }, 'text');

  return (
    <View
      style={{
        backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 17,
      }}>
      <Link href={'/'}>
        <Entypo name='home' size={30} style={{ color }} />
      </Link>
      <Link href={'/search'}>
        <Ionicons name='search' size={30} style={{ color }} />
      </Link>
      <Link href={'/(tabs)/download'}>
        <MaterialIcons
          name='download-for-offline'
          size={30}
          style={{ color }}
        />
      </Link>
      <Link href={'/(tabs)/settings'}>
        <Ionicons name='menu' size={30} style={{ color }} />
      </Link>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={() => <BottomBar />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
