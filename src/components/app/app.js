import React, { Component } from "react";
// import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import { Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage";
import HousePage from "../pages/housePage";
import { BookPage, BookItem } from "../pages/bookPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

  onItemSelected = id => {
    this.setState({ selectedChar: id });
  };

  render() {
    const { hide } = this.state;
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className="app">
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
            <Route
              path="/"
              exact
              component={() => <span className="info">Welcome to GOT DB </span>}
            />
            <Route path="/characters" component={CharacterPage} />
            <Route path="/houses" component={HousePage} />
            <Route path="/books" exact component={BookPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BookItem itemId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}
