import {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  YOUTUBE_BASE_URL,
} from './url';
import LANGUAGES from './languages';
import useSWR from 'swr';
import axios from 'axios';
import { TrendingResponse } from '@/types';

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

// const getMovieById = (movieId: string, append_to_response = '') =>
//   TMDB_HTTP_REQUEST.get(
//     `${ENDPOINTS.MOVIE}/${movieId}`,
//     append_to_response ? { params: { append_to_response } } : null
//   );

const getAllGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

export const getPoster = (path: string) =>
  `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getVideo = (key: string) => `${YOUTUBE_BASE_URL}?v=${key}`;

export const getLanguage = (language_iso: string) =>
  LANGUAGES.find((language) => language.iso_639_1 === language_iso);

export const useGetTrending = () =>
  useSWR(
    [ENDPOINTS.TRENDING],
    async ([url]) => (await TMDB_HTTP_REQUEST.get<TrendingResponse>(url)).data
  );

export const useGetUpcoming = () =>
  useSWR(
    [ENDPOINTS.UPCOMING_MOVIES],
    async ([url]) => (await TMDB_HTTP_REQUEST.get<TrendingResponse>(url)).data
  );
export const useGetTopRated = () =>
  useSWR(
    [ENDPOINTS.TOP_RATED_MOVIES],
    async ([url]) => (await TMDB_HTTP_REQUEST.get<TrendingResponse>(url)).data
  );
export const useGetNowPlaying = () =>
  useSWR(
    [ENDPOINTS.NOW_PLAYING_MOVIES],
    async ([url]) => (await TMDB_HTTP_REQUEST.get<TrendingResponse>(url)).data
  );
