import React, { Component } from "react";

import Spinner from "../components/spinner";

const WithItems = (View, getItems) => {
  return class extends Component {
    state = {
      items: {},
      loading: true
    };

    componentDidMount() {
      getItems().then(this.onItemLoaded);
    }

    onItemLoaded = items => {
      this.setState({
        items,
        loading: false
      });
    };
    render() {
      const { items, loading } = this.state;
      const spinner = loading ? <Spinner /> : null;
      const content = !loading ? <View {...this.props} items={items} /> : null;

      return (
        <div>
          {spinner}
          {content}
        </div>
      );
    }
  };
};

export default WithItems;
