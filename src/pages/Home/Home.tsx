import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Super from '../../components/Super/Super';
import Mission from '../../components/Mission/Mission';
import Contact from '../../components/Contact/Contact';

const Home = (): React.ReactElement => {
  return (
  <div>
    <TopNav />
    <Super />
    <Mission />
    <Contact />
  </div>
  );
};

export default Home;
