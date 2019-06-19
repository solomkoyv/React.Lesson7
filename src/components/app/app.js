import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import { Button } from "reactstrap";

export default class App extends Component {
  state = { hide: true };
  onHide = () => {
    this.setState(({ hide }) => {
      return { hide: !hide };
    });
  };
  render() {
    const { hide } = this.state;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <Button outline color="secondary" onClick={this.onHide}>
                Show Character
              </Button>
              {hide ? <RandomChar /> : null}
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
