import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

import "./charDetails.css";

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

const Field = ({ char, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{char[field]}</span>
    </li>
  );
};

export { Field };

export default class CharDetails extends Component {
  gotService = new gotService();

  state = {
    char: {},
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const { charId, singleId } = this.props;
    if (!charId) {
      return;
    }

    singleId(charId)
      .then(char => {
        this.setState({ char });
      })

      // this.gotService
      // .getCharacter(charId)
      // .then(char => {
      //   this.setState({ char });
      // })
      .then(this.setState({ loading: false }))
      .catch(this.setState({ error: true }));
  }

  render() {
    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }
    const { char, loading, error } = this.state;
    const { name } = char;

    if (!error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <CharDetailsBlock>
        <Name>{name}</Name>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { char });
          })}
        </ul>
      </CharDetailsBlock>
    );
  }
}
