import React from "react";

const RecordItem = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default RecordItem;
