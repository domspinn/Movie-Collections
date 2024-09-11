import { useState, useEffect } from 'react';
import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import SearchForm from './SearchForm'; 
import MovieDetail from './MovieDetail';
import API from '../utils/API';

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');
  const [watchedList, setWatchedList] = useState([]); // State to hold the watched movies

  const searchMovie = (query) =>
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch('');
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    searchMovie('The Matrix');
  }, []);

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
  };

  // Function to add the movie to the watched list
  const addToWatchedList = () => {
    if (!watchedList.some(movie => movie.Title === result.Title)) {
      setWatchedList([...watchedList, result]); // Add movie to the list
      alert(`${result.Title} has been added to your Watched List`);
    } else {
      alert(`${result.Title} is already in your Watched List`);
    }
  };

  const { Title = '', Poster = '', Director = '', Genre = '', Released = '' } = result;

  return (
    <Container>
      {/* Search Form at the Top */}
      <div className="search-form-container">
        <SearchForm 
          value={search}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

      {/* Layout for Movie Details and Watchlist */}
      <div className="movie-layout">
        <Row>
          {/* Movie Details Column */}
          <Col size="md-8">
            <Card heading={Title || 'Search for a Movie to Begin'}>
              {Title ? (
                <>
                  <MovieDetail
                    title={Title}
                    src={Poster}
                    director={Director}
                    genre={Genre}
                    released={Released}
                  />
                  {/* Add to Watched List Button */}
                  <button onClick={addToWatchedList} className="btn btn-primary">
                    Add to Watched List
                  </button>
                </>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>

          {/* Watchlist Column */}
          <Col size="md-4">
            <Card heading="Your Watched List">
              {watchedList.length > 0 ? (
                <ul className="watched-list">
                  {watchedList.map((movie, index) => (
                    <li key={index}>{movie.Title}</li>
                  ))}
                </ul>
              ) : (
                <p>No movies in your Watched List yet.</p>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OmdbContainer;
