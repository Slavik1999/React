import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <Fragment>
      <h2>{counter}</h2>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rnd}>RND</button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(actions.inc()),
    dec: () => dispatch(actions.dec()),
    rnd: () => dispatch(actions.rnd())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
