import React from 'react'
import styled from 'styled-components'




const data = [
    "Front-end",
    "Back-end ",
    "FullStack ",
    "Data Base",
     "API Integration"

]


const Section = styled.div`
 height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  `

  const Container = styled.div`
   background: url("./public/nuvemRosa.jpg");
   height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display:flex;
  justify-content:space-between;
 
   `

   const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content:center;
   `
   
  const List = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  `
  const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px grey; 

  ::after{
  content: "${(props)=>props.text}";
  position: absolute;
  top:0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hiidden;
  white-space: nowrap;
  }
  &:hover{
    ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText{
    to{
    width: 100%;
    }}

    }
   }

  `



   const Right = styled.div`

   flex: 3;
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
   
const Works = () => {
  return (
  
    <Section>
        <Container>
            <Left>
                <List>
                    {data.map((item)=>(
                         <ListItem key={item}>{item}</ListItem>
                       

                    ))}
                   
                </List>
            </Left>

            <Right>
              <img src="./programacao.png" alt="" />
            </Right>

        </Container>

    </Section>
  )
}

export default Works