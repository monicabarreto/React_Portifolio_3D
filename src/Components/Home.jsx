import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import { DirectionalLight } from 'three'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Sphere, MeshDistortMaterial} from '@react-three/drei'




const Section = styled.div`
 height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  `

  const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width:1400px;
  display:flex;
  justify-content:space-between;
   `

   const Left = styled.div`
  flex: 3;
  display:flex;  
  flex-direction:column;
  justify-content: center;
  gap:10px;
  margin: 50px;
   
   `
   const Title = styled.h1`
   color: #9932cc	;
   font-size: 70px;
   `
   const Title2 = styled.div`
   display: flex;
   align- items: center;
   gap: 10px;
   `
   const Line = styled.img`
   color: #db7093	;
   height: 50px;
   padding: 7px;
   margin: 0;
   `
   const Subtitle = styled.h3`
   color: green;
   `

   const Text = styled.p`
   color: red;
   `
   const Button = styled.button`
   background-color: #90ee90; 
   border-style: none;
   cursor: pointer;
   border-radius:30px;
   width: 600px;
  
   align-items: center;
     padding: 10px;
     color: white;

     &:hover {
    background-color: #76c776; /* Mude a cor conforme necessário */
    color: #f0f0f0; /* Mude a cor do texto conforme necessário */
  }
     
   `   

   const Right = styled.div`
   padding: 100px;
   display: flex;
   align-items:center;
   justfy-content: center;
  //  background-color: #87cefa;
  //  border-radius: 50%;
  //  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.30);
   

   // animation: animate 2s infinite ease alternate;

   @keyframes animate{
   to{
   transform: translateY(40px);
   }
   }
   
   `
   const img = styled.img`
   position: absolute;
   botton: 0;
   left:0;
   top: 0;
   right: 0;
    margin: auto;
    width: 800px;
   height: 600px;
   object-fit: contain;

   
   
   `
   
const Home = () => {
  return (

  
    <Section>
      <NavBar/>
      <Container>
        <Left>
          <Title> Pense. Faça. Resolva.</Title>
          <Title2>
            <Line src="./linha.png"  />
            <Subtitle>skills </Subtitle>            
           </Title2>
           <Text> Mollitia a asperiores cupiditate libero! At, corrupti ab optio iure similique eius quod deleniti maxime recusandae unde?</Text>
           <Button>Learn More</Button>
        </Left>


        <Right>     
        <Canvas camera={{fov: 25, position: [5,5,5] }}>
             <OrbitControls enableZoom={false}/>             
              <ambientLight intensity={1} />
              <directionalLight position={[5,3,1]}/>
              <Sphere args={[1,100,200]}  scale={1}>
              <MeshDistortMaterial  color="purple" attach="material" distort={0.5} speed={2} />     
                
                </Sphere> 
          </Canvas>
               
    
          <img src="./foguete.png" alt="" className='img' />

        </Right>

        
      </Container>
    </Section>
  )
}

export default Home