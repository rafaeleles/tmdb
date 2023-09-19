import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '4adeb6e248d7589446f126b1b810c44a';
const API_URL = 'https://api.themoviedb.org/3';

function NewReleases() {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((response) => {
        setNewReleases(response.data.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar lançamentos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lançamentos</h1>
      <div className="sections">
        {newReleases.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            {/* Outras informações do filme */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewReleases;
