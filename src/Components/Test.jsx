import React from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'

import {OrbitControls, RenderTexture,Text} from '@react-three/drei'






const Container = styled.div`
height:100%;
width: 100%;
  scroll-snap-align: center;
  background-color: #fff5ee;
`

const Test = () => {
  return (
<Container>
<Canvas>
    <OrbitControls autoRotate enableZoom={false}/>
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>

<mesh>
    <boxGeometry args={[2,2,2]} />

    <meshStandardMaterial>
      <RenderTexture map="map">
        <color attach="background" args={["red"]}  
        /> 
        <Text  fontSize={10} color="blue">M</Text>
        
       
       
      </RenderTexture>
      
    </meshStandardMaterial>
</mesh>
</Canvas>
</Container>
  )
}

export default Test