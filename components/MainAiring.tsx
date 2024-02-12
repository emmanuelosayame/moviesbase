import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { IMAGES } from '../utils/images';
import { TrendingResponse } from '@/types';
import { getPoster } from '@/utils/api';
import { COLORS } from '@/utils/colors';
import { Text } from './Themed';

const MainAiring = ({
  data,
}: {
  data: TrendingResponse['results'][0] | undefined;
}) => {
  return (
    <>
      {data && (
        <ImageBackground
          source={{ uri: getPoster(data?.poster_path) }}
          style={{
            height: 600,
            elevation: 5,
            justifyContent: 'flex-end',
            marginBottom: 20,
          }}
          imageStyle={{ height: '88%', width: '100%', alignSelf: 'flex-end' }}>
          <View style={styles.imdbContainer}>
            <Text
              style={{
                fontSize: 42,
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                flex: 1,
              }}>
              {data.title}
            </Text>
            <View style={{ flexDirection: 'row', gap: 30, marginVertical: 20 }}>
              <Text style={styles.text}>Original</Text>
              <Text style={styles.text}>Action</Text>
              <Text style={styles.text}>Sci-Fi</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 50,
                alignItems: 'center',
              }}>
              <Pressable style={{ alignItems: 'center' }}>
                <Ionicons name='add' size={38} color={'white'} />
                <Text
                  style={{ fontSize: 19, fontWeight: '600', lineHeight: 20 }}>
                  My List
                </Text>
              </Pressable>

              <Pressable
                style={{
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 9999,
                  width: 65,
                  height: 65,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Ionicons name='play' size={45} color={'black'} />
              </Pressable>

              <Pressable style={{ alignItems: 'center' }}>
                <Ionicons name='information-circle' size={40} color={'white'} />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imdbContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 3,
    paddingHorizontal: 30,
    height: '40%',
    width: '100%',
    // opacity: 0.2,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default MainAiring;
