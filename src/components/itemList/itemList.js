import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

// import './itemList.css';
const ItemCharacter = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {
  state = { itemList: null, error: false };

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <ItemCharacter
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </ItemCharacter>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (this.state.error) {
      return <ErrorMessage />;
    }

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
