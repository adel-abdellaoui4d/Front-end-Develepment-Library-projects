import React from 'react';
import './App.css';
import Header from './sections/Header/Header'; // Corrected casing
import Container from './components/Container/Container'; // Corrected casing
import Footer from './sections/Footer/Footer'; // Corrected casing
import Hero from './sections/Hero/Hero';
import MostPopular from './sections/MostPopular/MostPopular';


const App = () => {
  return (
    <>
      <Header />
      <Container>
      <Hero />
      <MostPopular /> 
      </Container>
      <Footer /> 
    </>
  );
};

export default App;