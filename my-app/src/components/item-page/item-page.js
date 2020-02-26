import React, { Component } from "react";

import Row from "../row";
import ErrorBoundry from "../error-boundry";

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
    const { GetList, GetItem, children } = this.props;
    const itemList = (
      <ErrorBoundry>
        <GetList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <GetItem selectedItem={this.state.selectedItem} children={children} />
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
