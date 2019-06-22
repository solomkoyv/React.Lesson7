import React, { Component } from "react";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";

import ItemDetails, { Field } from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";

export default class BookPage extends Component {
  gotService = new gotService();

  state = { selectedBook: 1, error: false };

  onItemSelected = id => {
    this.setState({ selectedBook: id });
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
        id={this.state.selectedBook}
        getData={this.gotService.getAllItems(`books`)}
        renderItem={({ name }) => name}
      />
    );

    const bookDetails = (
      <ItemDetails itemId={this.state.selectedBook} typeItems={`books`}>
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="NumberOfPages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="released" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={bookDetails} />;
  }
}
