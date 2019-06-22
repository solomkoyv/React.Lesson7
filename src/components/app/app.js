import React, { Component } from "react";
// import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import { Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharDetails from "../itemDetails";
import ItemList from "../itemList";
import gotService from "../../services/gotService";
import CharacterPage from "../pages/characterPage";
import BookPage from "../pages/bookPage";
import HousePage from "../pages/housePage";

import "./app.css";

export default class App extends Component {
  gotService = new gotService();

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

  onItemSelected = id => {
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
          <BookPage />
          <HousePage />
        </Container>
      </>
    );
  }
}
