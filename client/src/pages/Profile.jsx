import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const fetchWatchedMovies = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/api/user/watchedMovies', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setWatchedMovies(response.data.watchedMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWatchedMovies();
  }, []);

  return (
    <div className="profile-container">
      <h2>Your Watched Movies</h2>
      <ul>
        {watchedMovies.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
