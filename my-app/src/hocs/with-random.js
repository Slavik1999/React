import React, { Component } from "react";

import Spinner from "../components/spinner";

const WithRandom = (View, getItem, getImage) => {
  return class extends Component {
    state = {
      planet: {},
      loading: true
    };

    componentDidMount() {
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
      this.setState({
        planet,
        loading: false
      });
    };

    updatePlanet = () => {
      const id = Math.floor(Math.random() * 60 + 1);
      getItem(id).then(this.onPlanetLoaded);
    };

    render() {
      const { planet, loading } = this.state;
      const { children } = this.props;
      const spinner = loading ? <Spinner /> : null;
      const content = !loading ? (
        <View getImage={getImage} children={children} item={planet} />
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
