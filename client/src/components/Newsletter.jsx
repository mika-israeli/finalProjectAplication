import { Send } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Mailchimp from 'react-mailchimp-form'
import "./Css/Newsletter.css"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const MailchimpContainer = () =>{
  return(
    <div>
       <Mailchimp
        action='https://gmail.us17.list-manage.com/subscribe/post?u=14d33edf747c62eeb135d694f&amp;id=b957a83444'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]} 
        messages={
                   {
                       sending: "Sending...",
                       success: "Thank you for subscribing!",
                       error: "An unexpected internal error has occurred.",
                       empty: "You must write an e-mail.",
                       duplicate: "Too many subscribe attempts for this email address",
                       button: "Subscribe!"
                   }
               } 
        className='form'
        />
    </div>
  )
}

const Newsletter = () => {


  

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
        <MailchimpContainer/>
    </Container>
  );
};

export default Newsletter;
