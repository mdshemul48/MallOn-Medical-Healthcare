import React from 'react';

// components
import HeroAreaCarousel from './HeroAreaCarousel/HeroAreaCarousel';
import ApprovedArea from './ApprovedArea/ApprovedArea';
import { Container } from 'react-bootstrap';
import OurProduct from './OurProduct/OurProduct';
const Home = () => {
  return (
    <main>
      <HeroAreaCarousel />
      <ApprovedArea />
      <Container>
        <hr />
      </Container>
      <OurProduct />
    </main>
  );
};

export default Home;
