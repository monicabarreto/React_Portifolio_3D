import React from 'react'
import styled from 'styled-components'



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
   padding: 100px;
   display: flex;
   align-items:center;
   justfy-content: center;
  
   border-radius: 50%;

    animation: animate 2s infinite ease alternate;

   @keyframes animate{
   to{
   transform: translateY(40px);
   }
   }
  
  
   `
   const Title = styled.h1`
   color:grey;
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

   flex: 3;
  display:flex;  
  flex-direction:column;
  justify-content: center;
  gap:10px;
  margin: 50px;
   
 
   

   
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
   
const Quem = () => {
  return (


  
    <Section>

      <Container>
        <Left>
        <img src="foraDaCaixa.png" alt="" className='img' />
         
        </Left>


        <Right>
        <Title> Pense fora da caixa!</Title>
          <Title2>
            <Line src="./linha.png"  />
            <Subtitle>Quem sou eu? </Subtitle>            
           </Title2>
           <Text> Mollitia a asperiores cupiditate libero! At, corrupti ab optio iure similique eius quod deleniti maxime recusandae unde?</Text>
           <Button>Veja meus trabalhos </Button>
          
    
     
        </Right>

        
      </Container>
    </Section>
  )
}

export default Quem