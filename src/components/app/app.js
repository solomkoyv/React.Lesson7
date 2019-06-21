import React, { Component } from "react";
// import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage/";
import "./app.css";

export default class App extends Component {
  state = { hide: true, error: false, selectedChar: 130 };

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  onHide = () => {
    this.setState(({ hide }) => {
      return { hide: !hide };
    });
  };

  onCharSelected = id => {
    this.setState({ selectedChar: id });
  };

  render() {
    const { hide } = this.state;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 0 }}>
              {hide ? <RandomChar /> : null}
              <Button
                className="but_add_char"
                color="primary"
                size="lg"
                onClick={this.onHide}
              >
                Show Character
              </Button>
            </Col>
          </Row>
          <CharacterPage />
        </Container>
      </>
    );
  }
}
