import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";

// import "./charDetails.css";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
`;

const Name = styled.h4`
  margin-bottom: 20px;
  text-align: center;
`;

export default class CharDetails extends Component {
  gotService = new gotService();

  state = {
    char: null,
    loading: true
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId).then(char => {
      this.setState({ char });
    });
  }

  render() {
    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }

    const { name, gender, born, dead, culture } = this.state.char;

    return (
      <CharDetailsBlock>
        <Name>{name}</Name>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{dead}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </CharDetailsBlock>
    );
  }
}
