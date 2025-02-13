import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import { UpdateFollower } from 'react-mouse-follower'

const App = () => {
  return (
  <>
    <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 1000,
        followSpeed: 1.6,
      }}
    >
      <Navbar />
      <Hero />
    </UpdateFollower>
    <UpdateFollower
      mouseOptions={{
          backgroundColor: 'black',
          zIndex: 1000,
          followSpeed: 1.6,
        }}
      >
    <Services />
    </UpdateFollower>
  </>
  );
};

export default App;