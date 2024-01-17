import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Super from '../../components/Super/Super';
import Mission from '../../components/Mission/Mission';

const Home = (): React.ReactElement => {
  return (
  <div>
    <TopNav />
    <Super />
    <Mission />
  </div>
  );
};

export default Home;
