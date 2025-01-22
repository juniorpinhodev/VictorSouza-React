import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'

const App = () => {
  return (
  <main className='overflow-x-hidden'>
    <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 1000,
        followSpeed: 1.6,
      }}
    >
      <Navbar />
    </UpdateFollower>
  </main>
  );
};

export default App;