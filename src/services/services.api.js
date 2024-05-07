import { baseURL, accessToken } from "../../config";
import axios from "axios";

const getTrendingAll = async (time = "day") => {
  const res = await axios.get(`${baseURL}/trending/all/${time}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getPopularMovies = async () => {
  const res = await axios.get(`${baseURL}/movie/popular?page=1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getUpcomingMovie = async () => {
  const res = await axios.get(`${baseURL}/movie/upcoming`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getTrendingMovie = async () => {
  const res = await axios.get(`${baseURL}/trending/movie/day`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};
const getTopRatedMovie = async () => {
  const res = await axios.get(`${baseURL}/movie/top_rated`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};
const getNowPlayingMovie = async () => {
  const res = await axios.get(`${baseURL}/movie/now_playing`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getDetailMovie = async (id) => {
  const res = await axios.get(
    `${baseURL}/movie/${id}?append_to_response=credits,translations,reviews,videos,recommendations,keywords,images`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res.data;
};

const getMovieCollection = async (id) => {
  const res = await axios.get(`${baseURL}/collection/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

const getSeriesTodayAiring = async () => {
  const res = await axios.get(`${baseURL}/tv/airing_today`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getSeriesOnTheAir = async () => {
  const res = await axios.get(`${baseURL}/tv/on_the_air`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};
const getSeriesPopular = async () => {
  const res = await axios.get(`${baseURL}/tv/popular`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};
const getSeriesTopRated = async () => {
  const res = await axios.get(`${baseURL}/tv/top_rated`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};
const getSeriesTrending = async () => {
  const res = await axios.get(`${baseURL}/trending/tv/day`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data.results;
};

const getDetailSeries = async (series_id) => {
  const response = await axios.get(
    `${baseURL}/tv/${series_id}?append_to_response=credits,translations,reviews,videos,recommendations,keywords,images`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

const getCredit = async (type, id) => {
  const response = await axios.get(`${baseURL}/${type}/${id}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export {
  getTrendingAll,
  getPopularMovies,
  getUpcomingMovie,
  getTrendingMovie,
  getTopRatedMovie,
  getNowPlayingMovie,
  getDetailMovie,
  getMovieCollection,
  getSeriesTodayAiring,
  getSeriesOnTheAir,
  getSeriesPopular,
  getSeriesTopRated,
  getSeriesTrending,
  getDetailSeries,
  getCredit
};
