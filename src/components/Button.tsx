import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  background-color: #188;
  padding: 8px 20px;
  cursor: pointer;

  :hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: #fff;
    border-radius: 4px;
    border: 2px solid #188;
  }
`;

const Button = () => {
  return (
    <Link to='sign-up'>
      <Btn>Sign Up</Btn>
    </Link>
  );
};

export default Button;
