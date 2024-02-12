import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IMAGES } from '@/utils/images';
import { COLORS } from '@/utils/colors';
import { getPoster } from '@/utils/api';
import { TrendingResponse } from '@/types';

const MovieCard = ({
  details,
  onPress,
}: {
  details: TrendingResponse['results'][0];
  onPress: (id: number) => void;
}) => {
  const size = 1;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(details.id)}>
      <ImageBackground
        style={{ ...styles.container }}
        imageStyle={{ borderRadius: 7 }}
        source={{ uri: getPoster(details.poster_path) }}>
        <View style={{ ...styles.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={IMAGES.IMDB}
            resizeMode='cover'
            style={{ ...styles.imdbImage, height: 20 * size, width: 50 * size }}
          />
          <Text
            style={{
              ...styles.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}>
            {details.vote_average}
          </Text>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {details.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    height: 170,
    width: 110,
    borderRadius: 5,
    elevation: 2,
    marginVertical: 2,
  },
  movieTitle: {
    //     fontFamily: FONTS.EXTRA_BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    textAlign: 'center',
    maxWidth: 100,
  },
  movieSubTitle: {
    fontSize: 12,
    //     fontFamily: FONTS.REGULAR,
  },
  movieSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: COLORS.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: COLORS.HEART,
    //     fontFamily: FONTS.EXTRA_BOLD,
  },
});

MovieCard.defaultProps = {
  size: 1,
  heartLess: true,
};

export default MovieCard;
