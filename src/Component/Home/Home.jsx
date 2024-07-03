import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

const ApiKey = "fdf95fb066b7c9ffbcdfba2b9fba090e";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const authentication =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8";
const nowPlaying = "now_playing";
const Upcoming = "upcoming";

const Card = ({ img }) => (
  <div className="card">
    <img src={img} alt="cover" />
  </div>
);

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

function Home() {
  const [upcomingMovies, setUpComingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [PopularMovie, setPopularMovie] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/upcoming`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        const results = data.results;
        console.log(results);
        setUpComingMovies(results);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options2 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        const data = response.data;
        const results = data.results;
        console.log(results);
        setNowPlaying(results);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options3 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
      },
    };

    axios
      .request(options3)
      .then(function (response) {
        const data = response.data;
        const results = data.results;
        console.log(results);
        setPopularMovie(results);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options4 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
      },
    };

    axios
      .request(options4)
      .then(function (response) {
        const data = response.data;
        const results = data.results;
        console.log(results);
        setTopRated(results);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options5 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
      },
    };

    axios
      .request(options5)
      .then(function (response) {
        const data = response.data;
        const genres = data.genres;
        console.log(genres);
        setGenreMovie(genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: PopularMovie[0]
            ? `url(${`${imgUrl}/${PopularMovie[0].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        {PopularMovie[0] && <h1>{PopularMovie[0].original_title}</h1>}
        {PopularMovie[0] && <p>{PopularMovie[0].overview}</p>}
        <div>
          <button>
            <FaPlay />
            Play
          </button>
          <button>
            My List
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlaying} />
      <Row title={"Popular On Netflix"} arr={PopularMovie} />
      <Row title={"Top Rated"} arr={TopRated} />

      <div className="genreBox">
        {genreMovie.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export { Home };

// ${url}/movie/${upcoming}?api_key${ApiKey}

// const options = {
//   method: "GET",
//   url: "https://api.themoviedb.org/3/movie/upcoming",
//   params: { language: "en-US", page: "1" },
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer fdf95fb066b7c9ffbcdfba2b9fba090e",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// useEffect(() => {
//   const fetchUpcoming = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/movie/latest`,
//       {
//         headers: {
//           "API-Key": { ApiKey },
//         },
//       }
//     );
//     console.log(data);
//   };
//   fetchUpcoming();
// }, []);

// useEffect(() => {
//   const options = {
//     method: "GET",
//     url: "https://api.themoviedb.org/3/authentication",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY5NWZiMDY2YjdjOWZmYmNkZmJhMmI5ZmJhMDkwZSIsInN1YiI6IjY2NjJjOTk0OTA1NzY1M2EwMTNjYTE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSlecm5OreXvhyLFkPntoStwpguOrMr1GeitNfqGiq8",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }, []);

// const fetchUpcoming = async () => {
//   const { data } = await axios.get(
//     `${url}/movie/157336?api_key=${ApiKey}&append_to_response=videos`
//   );
//   console.log(data);
// };
// fetchUpcoming();

// {
//   img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg",
// },
