import React, { useState } from 'react';
import styles from '../styles/dashboard.module.css';
import { useRouter } from 'next/router';

// Sample data with dummy descriptions
const movies = [
  {
    title: 'Black Panther',
    rating: 7.2,
    image: 'movie1.png',
    description: 'A superhero fights to protect Wakanda, a hidden kingdom of advanced technology.'
  },
  {
    title: 'Mickey 17',
    rating: 7.8,
    image: 'movie2.png',
    description: 'A clone discovers secrets of his world as he navigates his existence.'
  },
  {
    title: 'Magazine Dreams',
    rating: 7.0,
    image: 'movie3.png',
    description: 'A bodybuilder struggles to balance his dream and mental health.'
  },
  {
    title: 'The Wedding Banquet',
    rating: 8.0,
    image: 'movie4.png',
    description: 'A gay man fakes a marriage to appease his traditional parents.'
  },
  {
    title: 'The Electric State',
    rating: 6.9,
    image: 'movie5.png',
    description: 'A girl and a robot travel through a retro-futuristic America.'
  },
  {
    title: 'Freaky Friday',
    rating: 7.3,
    image: 'movie6.png',
    description: 'Mother and daughter magically switch bodies and learn life lessons.'
  },
  {
    title: 'Sting',
    rating: 6.5,
    image: 'movie7.png',
    description: 'A sci-fi thriller where curiosity unleashes unexpected consequences.'
  },
];

const Dashboard = () => {
  const router = useRouter();
  const [activeDescriptions, setActiveDescriptions] = useState({});

  const toggleDescription = (index) => {
    setActiveDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const goToProfile = () => {
    router.push('/UserProfile');
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h2>🎬 Movie Dashboard</h2>
        <button className={styles.profileButton} onClick={goToProfile}>
          <img src="movie2.png" alt="Profile" className={styles.profileImage} />
        </button>
      </header>

      <h1 className={styles.title}>🔥 Trending Movies</h1>
      <p className={styles.subtitle}>Click any movie to rate or see more info!</p>

      <div className={styles.moviesGrid}>
        {movies.map((movie, index) => (
          <div key={index} className={styles.movieCard}>
            {activeDescriptions[index] ? (
              <div className={styles.descriptionBox}>
                <p className={styles.descriptionText}>{movie.description}</p>
                <button onClick={() => toggleDescription(index)}>Back</button>
              </div>
            ) : (
              <>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className={styles.movieImage}
                />
                <div className={styles.movieInfo}>
                  <div className={styles.movieTitle}>{movie.title}</div>
                  <div className={styles.movieRating}>⭐ {movie.rating}</div>
                  <div className={styles.actionButtons}>
                    <button>Watch</button>
                    <button>Rate</button>
                    <button>Add to List</button>
                    <button onClick={() => toggleDescription(index)}>About</button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
