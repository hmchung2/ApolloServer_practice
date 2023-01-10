import { gql, useQuery } from "@apollo/client";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

export default function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  // const [movies, setMovies] = useState([]);

  // const client = useApolloClient();

  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           allMovies {
  //             title
  //             id
  //           }
  //         }
  //       `,
  //     })
  //     .then((results) => setMovies(results.data.allMovies));
  // }, [client]);

  if (loading) {
    return <h1>Loading ... </h1>;
  }

  if (error) {
    return <hi>Could not fetch ... </hi>;
  }

  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie) => {
        console.log(movie.id + " : " + movie.title);
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}

      {/* <h1>Tweets</h1>
      {data.allTweets.map((tweet) => {
        return (
          <li key={tweet.id}>
            {tweet.text} by : {tweet.author.fullName}
          </li>
        );
      })} */}
    </ul>
  );
}
