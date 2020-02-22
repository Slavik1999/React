import React, { Component } from "react";

import Row from "../row";
import ErrorBoundry from "../error-boundry";

import ItemList from "../item-list";
import ItemDetails from "../item-details";

import "./item-page.css";

class ItemPage extends Component {
  state = {
    selectedItem: {}
  };

  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { getList, getItem, getImage, children } = this.props;
    const itemList = (
      <ErrorBoundry>
        <ItemList
          getData={getList}
          onSelectedItem={this.onSelectedItem}
          renderItem={item => `${item.name}`}
        />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          getData={getItem}
          selectedItem={this.state.selectedItem}
          getImage={getImage}
          children={children}
        />
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}

export default ItemPage;
