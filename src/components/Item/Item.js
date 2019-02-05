import React from "react";
import "./Item.css";

const Item = props => {
  return <div id={props.id} className="panel panel-default Item">
      <div>
        Name : {props.name}
      </div>
      <div>
        Authors : {props.authors}
      </div>
      <div>
        Type : {props.type}
      </div>
    </div>;
};

export default Item;
