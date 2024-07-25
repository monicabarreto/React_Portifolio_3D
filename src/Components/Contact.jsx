import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';




const Section = styled.div`
 height: 100vh;
 scroll-snap-align:center;  `

 const Container = styled.div`
  //  height: 100vh;
  // scroll-snap-align: center;
  width: 100%;
  display:flex;
  justify-content:space-between;
  gap:50px;
 
 `
 const Left = styled.div`
 flex:1;
display: flex;
justify-content: flex-end;
align-items: center;

  `

 const Right = styled.div`
  flex:1;
display: flex;
justify-content:flex-end;
align-items: center;

`

 const Title = styled.h1`
 font-weight:200;
   `

 const Form = styled.form`
width: 500px; 
display: flex;
flex-direction: column;
gap: 25px;`

 const Input = styled.input`
 padding: 20px;
 background-color: #F0FFFF ;
 border: none;
 border-radius: 5px;
 
 `

 const Button = styled.button`
 background-color: #4169e1;
 color: white;
 border-style: none;
 padding:10px;
  border-radius: 5px;
 cursor: pointer;
  

 `
 const TextArea = styled.textarea`
 height:130px;
  border-radius: 5px;
  border:  none;
  padding: 10px;
   background-color: #F0FFFF ;

 `

const Contact = () => {
  const ref  = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit= e=>{
    e.preventDefault ()

    emailjs
    .sendForm('service_yysp1na', 'template_jip5vxc', ref.current, {
      publicKey: 'e7_h68APC38ArE-Vp',
    })
    .then(
      (result) => {
        console.log(result.text);
        setSuccess(true)
      },
      (error) => {
        console.log( error.text);
        setSuccess(false);
      },
    );
};
  return (
  <Section>
     <Container>
      <Left>
        <Form  ref={ref}  onSubmit={handleSubmit}>
          <Title>Contact Me </Title>
          <Input placeholder='Name' name='name'/>
          <Input placeholder='Email' name='email'/>
          <TextArea placeholder='digite um texto' name='message'/>
         <Button type='submit'>Send</Button>
         {success && " msg enviada"}
        </Form>
      </Left>
      <Right>
        <Map/>

      </Right>
   

    </Container>
    </Section>
  )
}

export default Contact