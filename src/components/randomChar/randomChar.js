import React, { Component } from "react";
import styled from "styled-components";

// import './randomChar.css';

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
`;
const NameCharacter = styled.h4`
  margin-bottom: 20px;
  text-align: center;
`;
const Gender = styled.span`
  font-weight: bold;
`;

export default class RandomChar extends Component {
  render() {
    return (
      <RandomBlock>
        <NameCharacter>Random Character: John</NameCharacter>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <Gender>Gender </Gender>
            <span>male</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born </span>
            <span>11.03.1039</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died </span>
            <span>13.09.1089</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture </span>
            <span>Anarchy</span>
          </li>
        </ul>
      </RandomBlock>
    );
  }
}
