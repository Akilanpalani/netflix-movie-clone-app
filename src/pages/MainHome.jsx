import React from 'react';
import Home from '../pages/Home';
import Row from '../components/Row';
import requests from '../utils/requests';
const MainHome = () => {
  return (
    <div>
      <Home />
      <Row title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row title='Trending' fetchUrl={requests.requestTrending} />
      <Row title='Popular' fetchUrl={requests.requestPopular} />
      <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
    </div>
  );
};

export default MainHome;
