import React from "react";

const WithChildren = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

export default WithChildren;
