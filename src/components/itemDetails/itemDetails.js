import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

import "./itemDetails.css";

const ItemDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
`;

const Name = styled.h4`
  margin-bottom: 20px;
  text-align: center;
`;

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {
  gotService = new gotService();

  state = {
    item: {},
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { typeItems, itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.gotService
      .getItem(typeItems, itemId)
      .then(item => {
        this.setState({ item });
      })
      .then(this.setState({ loading: false }))
      .catch(this.setState({ error: true }));
  }

  render() {
    if (!this.state.item) {
      return <span className="select-error">Please select a character</span>;
    }
    const { item, loading, error } = this.state;
    const { name } = item;

    if (!error) {
      return <ErrorMessage />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <ItemDetailsBlock>
        <Name>{name}</Name>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </ItemDetailsBlock>
    );
  }
}
