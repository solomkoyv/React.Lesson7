import React, { Component } from "react";
import gotService from "../../../services/gotService";
import ItemDetails, { Field } from "../../itemDetails";

export default class BookItem extends Component {
  gotService = new gotService();
  render() {
    return (
      <ItemDetails itemId={this.props.itemId} typeItems={`books`}>
        <Field field="name" label="Name" />
        <Field field="numberOfPages" label="NumberOfPages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="released" />
      </ItemDetails>
    );
  }
}
