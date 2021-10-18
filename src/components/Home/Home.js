import React from 'react';

// components
import HeroAreaCarousel from './HeroAreaCarousel/HeroAreaCarousel';
import ApprovedArea from './ApprovedArea/ApprovedArea';
import { Container } from 'react-bootstrap';
import OurProduct from './OurProduct/OurProduct';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import AdsArea from './AdsArea/AdsArea';

const Home = () => {
  return (
    <main>
      <HeroAreaCarousel />
      <ApprovedArea />
      <Container>
        <hr />
      </Container>
      <OurProduct />
      <FeaturedProduct />
      <AdsArea />
    </main>
  );
};

export default Home;
