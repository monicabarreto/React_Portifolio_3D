import React from 'react'
import './App.css'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Works from './Components/Works'
import Quem from './Components/Quem'
import styled from 'styled-components';
import Test from './Components/Test'



const Container = styled.div`
 height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior:smooth;
 overflow-y:auto
 scrollbar-width: none;
 color: black;
 background: url("./public/nuvemRosa.jpg");
 font-family: Sans-Serif;
 color:white;
 margin: 0;
 padding: 0;
 
 
`;

function App() {
 
  return (

    <Container>
           <Home/>
           <Quem/>              
          <Works />
          <Contact/>  
          <Test/>
    </Container>
    
 
  
  )
}

export default App
