import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border-top: transparent !important;
  border-left: transparent !important;
  border-right: transparent !important;
  border-bottom: 1px solid white;
  box-shadow: none !important;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  background-color: transparent;
  outline: none;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  background-color: white;
  border-radius: 6px;
  color: #49a2e1;
  font-weight: 600;
  width: 84px;
  height: 32px;
  padding-top: auto;
  padding-bottom: auto;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  border: none;
`;

const Logo = styled.h1`
  color: white;
  text-align: center;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, Logo, Card, Error };
