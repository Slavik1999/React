import React, { Component } from "react";

import Spinner from "../components/spinner";

const WithRandom = (View, getItem, getImage) => {
  return class extends Component {
    state = {
      item: {},
      loading: true
    };

    componentDidMount() {
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    onPlanetLoaded = item => {
      this.setState({
        item,
        loading: false
      });
    };

    updatePlanet = () => {
      const id = Math.floor(Math.random() * 20 + 1);
      getItem(id).then(this.onPlanetLoaded);
    };

    render() {
      const { item, loading } = this.state;
      const spinner = loading ? <Spinner /> : null;
      const content = !loading ? (
        <View getImage={getImage} item={item} />
      ) : null;

      return (
        <div className="random-planet jumbotron rounded">
          {spinner}
          {content}
        </div>
      );
    }
  };
};

export default WithRandom;
