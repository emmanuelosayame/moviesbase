import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name='chevron-back' size={33} color={'white'} />
        </Pressable>
        <View
          style={{
            position: 'relative',
            flex: 1,
            borderRadius: 5,
            overflow: 'hidden',
            justifyContent: 'center',
          }}>
          <Ionicons
            name='search'
            size={25}
            color={'white'}
            style={{
              position: 'absolute',
              top: '14%',
              left: 10,
            }}
          />
          <TextInput
            style={styles.input}
            placeholder='Search shows, movies...'
            placeholderTextColor={'white'}
          />
        </View>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'rgba(250,250,250,0.2)',
    paddingVertical: 5,
    paddingLeft: 40,
    paddingRight: 10,
    width: '100%',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
