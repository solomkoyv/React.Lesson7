import React, { Component } from "react";
// import './randomChar.css';
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

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
  constructor() {
    super();
    this.updateChar();
  }

  gotService = new gotService();

  state = {
    char: {},
    loading: true,
    error: false
  };

  onCharLoaded = char => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updateChar() {
    const id = Math.floor(Math.random() * 140 + 25);
    // const id = 1300000;
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { char, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <RandomBlock>
        {errorMessage}
        {spinner}
        {content}
      </RandomBlock>
    );
  }
}

const View = ({ char }) => {
  const { name, gender, born, dead, culture } = char;
  return (
    <>
      <NameCharacter>Random Character: {name}</NameCharacter>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <Gender>Gender </Gender>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{dead}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
