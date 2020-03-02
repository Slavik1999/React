import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Record from "../record-item";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import { StarshipList } from "./item-lists";
import { StarshipDetails } from "./item-details";

class StarshipPage extends Component {
  onSelectedItem = id => {
    this.props.history.push(`/starships/${id}`);
  };

  render() {
    const { match } = this.props;
    const { id } = match.params;

    const itemList = (
      <ErrorBoundry>
        <StarshipList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <StarshipDetails selectedItem={id}>
          <Record label="Name" field="name" />
          <Record label="Model" field="model" />
          <Record label="Length" field="length" />
          <Record label="Cost" field="cost" />
        </StarshipDetails>
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}

export default withRouter(StarshipPage);
