import React, { Component } from "react";
import styled from "styled-components";
import img from "./error.png";

// import "./errorMessage.css";

const ErrorImg = styled.img`
  width: 100%;
`;

const ErrorMessage = () => {
  return (
    <>
      <ErrorImg src={img} alt="error" />
      <span>Something goes wrong</span>
    </>
  );
};
export default ErrorMessage;
