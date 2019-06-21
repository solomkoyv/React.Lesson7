import React, { Component } from "react";
// import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import CharDetails from "../charDetails";
import ItemList from "../itemList";
import gotService from "../../services/gotService";
import BookPage from "../pages/bookPage";

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
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                id={this.state.selectedChar}
                getData={this.gotService.getAllHouses}
                renderItem={item => `${item.name}`}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
