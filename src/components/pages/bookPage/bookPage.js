import React, { Component } from "react";
import ItemList from "../../itemList";
import gotService from "../../../services/gotService";

import CharDetails, { Field } from "../../charDetails/";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";

export default class BookPage extends Component {
  gotService = new gotService();

  state = { error: false };

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
        // id={this.state.selectedBook}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name}
      />
    );

    const bookDetails = (
      <CharDetails
        charId={this.state.selectedBook}
        singleId={this.gotService.getBook}
      >
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="NumberOfPages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="released" />
      </CharDetails>
    );

    return <RowBlock left={itemList} right={bookDetails} />;
  }
}
