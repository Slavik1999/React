import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Record from "../record-item";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import { PeopleList } from "./item-lists";
import { PersonDetails } from "./item-details";

class PeoplePage extends Component {
  onSelectedItem = id => {
    this.props.history.push(`/peoples/${id}`);
  };

  render() {
    const { match } = this.props;
    const { id } = match.params;

    const itemList = (
      <ErrorBoundry>
        <PeopleList onSelectedItem={this.onSelectedItem} />
      </ErrorBoundry>
    );
    const itemDetails = (
      <ErrorBoundry>
        <PersonDetails selectedItem={id}>
          <Record label="Name" field="name" />
          <Record label="Gender" field="gender" />
          <Record label="Birth Year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </PersonDetails>
      </ErrorBoundry>
    );

    return (
      <React.Fragment>
        <Row left={itemList} right={itemDetails} />
      </React.Fragment>
    );
  }
}

export default withRouter(PeoplePage);
