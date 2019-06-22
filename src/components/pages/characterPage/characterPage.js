import React, { Component } from "react";
// import { Col, Row, Container } from "reactstrap";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";

import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = { selectedChar: 130, error: false };

  onItemSelected = id => {
    this.setState({ selectedChar: id });
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
        id={this.state.selectedChar}
        getData={this.gotService.getAllItems(`characters?page=5&pageSize=10`)}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const charDetails = (
      <ItemDetails itemId={this.state.selectedChar} typeItems={`characters`}>
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
