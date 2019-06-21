import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";

// import './itemList.css';
const ItemCharacter = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {
  gotService = new gotService();

  state = { charList: null };

  componentDidMount() {
    this.gotService.getAllCharacters().then(charList => {
      this.setState({ charList });
    });
  }

  renderItems(arr) {
    // const { id } = this.props;
    // console.log({ id });
    return arr.map((item, i) => {
      // console.log(item.id);
      return (
        <ItemCharacter
          key={item.id}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(item.id)}
        >
          {item.name}
        </ItemCharacter>
      );
    });
  }

  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
