import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { COLORS } from '../../utils/colors';
import ItemSeperator from '@/components/ItemSeperator';
import MovieCard from '@/components/MovieCard';
import { router } from 'expo-router';
import MainAiring from '@/components/MainAiring';
import {
  useGetNowPlaying,
  useGetTopRated,
  useGetTrending,
  useGetUpcoming,
} from '@/utils/api';

export default function HomeScreen() {
  const { data: trending, isLoading } = useGetTrending();
  const { data: upcoming, isLoading: loadingUpcoming } = useGetUpcoming();
  const { data: toprated, isLoading: loadingTR } = useGetTopRated();
  const { data: nowPlaying, isLoading: loadingNP } = useGetNowPlaying();

  if (isLoading || loadingUpcoming)
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 100,
          top: '50%',
          left: '50%',
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 99999,
        }}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      <MainAiring data={trending?.results[0]} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Trending Now</Text>

        <FlatList
          data={trending?.results.slice(1)}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={15} />}
          ListHeaderComponent={() => <ItemSeperator width={15} />}
          ListFooterComponent={() => <ItemSeperator width={15} />}
          renderItem={({ item }) => (
            <MovieCard details={item} onPress={() => {}} />
          )}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Upcoming</Text>

        <FlatList
          data={upcoming?.results}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={15} />}
          ListHeaderComponent={() => <ItemSeperator width={15} />}
          ListFooterComponent={() => <ItemSeperator width={15} />}
          renderItem={({ item }) => (
            <MovieCard details={item} onPress={() => {}} />
          )}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>

        <FlatList
          data={nowPlaying?.results}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={15} />}
          ListHeaderComponent={() => <ItemSeperator width={15} />}
          ListFooterComponent={() => <ItemSeperator width={15} />}
          renderItem={({ item }) => (
            <MovieCard details={item} onPress={() => {}} />
          )}
        />
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Top Rated</Text>

        <FlatList
          data={toprated?.results}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={15} />}
          ListHeaderComponent={() => <ItemSeperator width={15} />}
          ListFooterComponent={() => <ItemSeperator width={15} />}
          renderItem={({ item }) => (
            <MovieCard details={item} onPress={() => {}} />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_BACKGROUND,
    paddingTop: 0,
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'transparent',
    gap: 10,
  },
  headerTitle: {
    fontSize: 20,
    paddingHorizontal: 30,
    // fontFamily: FONTS.REGULAR,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    // fontFamily: FONTS.BOLD,
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
