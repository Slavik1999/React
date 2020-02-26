import React, { Component } from "react";

import Spinner from "../components/spinner";
import ChooseItem from "../components/choose-item";

const WithDetails = (View, getItem, getImage) => {
  return class extends Component {
    state = {
      item: {},
      loading: true,
      chooseItem: false
    };

    componentDidUpdate(prevProps) {
      if (prevProps.selectedItem !== this.props.selectedItem) {
        this.setState({
          loading: true,
          chooseItem: true
        });
        getItem(this.props.selectedItem).then(this.onItemLoaded);
      }
    }

    onItemLoaded = item => {
      this.setState({
        item,
        loading: false
      });
    };

    render() {
      const { item, loading, chooseItem } = this.state;
      const { children } = this.props;
      const hooseItem = !chooseItem ? <ChooseItem /> : null;
      const spinner = loading && chooseItem ? <Spinner /> : null;
      const content = !loading ? (
        <View children={children} getImage={getImage} item={item} />
      ) : null;

      return (
        <div className="random-planet jumbotron rounded">
          {hooseItem}
          {spinner}
          {content}
        </div>
      );
    }
  };
};
export default WithDetails;
