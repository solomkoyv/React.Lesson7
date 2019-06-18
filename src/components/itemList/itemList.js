import React, { Component } from "react";
import styled from "styled-components";

// import './itemList.css';
const ItemCharacter = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <ItemCharacter className="list-group-item">John Snow</ItemCharacter>
        <ItemCharacter className="list-group-item">Brandon Stark</ItemCharacter>
        <ItemCharacter className="list-group-item">Geremy</ItemCharacter>
      </ul>
    );
  }
}
