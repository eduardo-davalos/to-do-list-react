import React from "react";

function Item(props) {
  return (
    <li
      onClick={() => {
        props.borraItem(props.id);
      }}
    >
      {props.name}
    </li>
  );
}

export default Item;
