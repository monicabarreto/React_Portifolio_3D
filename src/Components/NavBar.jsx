import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display:flex;
margin: 10px;

 `

 const Container = styled.div`
 width:1400px;
 display: flex;


 `

 const Links = styled.div`  
 display:flex;
 align-item:center;
 gap:20px;
 cursor:pointer;
 margin:30px 0 auto;
  
 
 
  `
  const Logo = styled.img`
  height:50px;
  margin:30px;
  padding: 20px 0px; 

 
  `
   const List = styled.ul`
   display:flex;
   gap:20px;
   list-style:none;

  `
   const ListItem = styled.li`
  `
   const Icons = styled.div`
    display:flex;    
    justfy-content:flex-end;
    align-items:center;
    gap:20px;
    cursor:pointer;
   
  `
  const Icon = styled.img`
  width:20px;
  cursor:pointer;
  color:white;
   
  `
   const Button  = styled.button`   
   width: 100px; 
   padding: 10px;
   margin: 10px auto 3rem 900px;
   background-color: #db7093		;
   color:white;
   border-radius:5px;
    border-style:none;
    img{
    width:15px;
   }
  
  `


const NavBar = () => {
  return (
    <Section> 
        <Container>
           <Links>
            
                    <Logo  src="./Monicadev.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                        
                    </List>    
                        
            </Links>
            <Icons>
                <Button >  <img src="./pesquisar.png" alt="" />Search </Button>
            </Icons>        

           
       
          
        
        
        
        
        
        </Container></Section>
  )
}

export default NavBar