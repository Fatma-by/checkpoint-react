import React from "react";
import Cards from "./Cards";
import "./list.css";

function CardList() {
  return (
    <div>
      <div class="flex-container">
        <div class="flex-item-left"><Cards /></div>
        <div class="flex-item-right"><Cards /></div>
        <div class="flex-item-right"><Cards /></div>
        
      </div>
    </div>
  );
}

export default CardList;
