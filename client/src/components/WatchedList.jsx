import React from 'react';
import Card from './UI/Card';
import Col from './UI/Col';
import Row from './UI/Row';
import Container from './UI/Container';

const Watchlist = ({ watchedList }) => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
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
    </Container>
  );
};

export default Watchlist;
