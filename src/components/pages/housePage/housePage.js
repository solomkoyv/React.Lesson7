import React, { Component } from "react";
// import { Col, Row, Container } from "reactstrap";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";

import HouseDetails, { Field } from "../../charDetails/";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";

export default class HousePage extends Component {
  gotService = new gotService();

  state = { selectedHouse: 130, error: false };

  onItemSelected = id => {
    this.setState({ selectedHouse: id });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        id={this.state.selectedHouse}
        getData={this.gotService.getAllHouses}
        renderItem={({ name }) => name}
      />
    );

    const houseDetails = (
      <HouseDetails houseId={this.state.selectedHouse}>
        <Field field="name" label="Name" />
        <Field field="region" label="Region" />
        <Field field="bowordsrn" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="overlord" label="Overlord" />
        <Field field="ancestralWeapons" label="Ancestral Weapons" />
      </HouseDetails>
    );

    return <RowBlock left={itemList} right={houseDetails} />;
  }
}
