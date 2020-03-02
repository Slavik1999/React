import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Record from "../record-item";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import { PlanetList } from "./item-lists";
import { PlanetDetails } from "./item-details";

class PlanetPage extends Component {
  onSelectedItem = id => {
    this.props.history.push(`/planets/${id}`);
  };

  render() {
    const { match } = this.props;
    const { id } = match.params;

    const itemList = (
      <ErrorBoundry>
        <PlanetList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PlanetDetails selectedItem={id}>
          <Record label="Name" field="name" />
          <Record label="Population" field="population" />
          <Record label="Rotation Period" field="rotation_period" />
          <Record label="Diameter" field="diameter" />
        </PlanetDetails>
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}

export default withRouter(PlanetPage);
