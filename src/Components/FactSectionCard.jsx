import React from "react";

const FactSectionCard = ({ factData }) => {
  const { iconClass, title, count } = factData;
  return (
    <>
      <div class="counter bg-white rounded p-5">
        <i class={`${iconClass}`}></i>
        <h4>{title}</h4>
        <h1>{count}</h1>
      </div>
    </>
  );
};

export default FactSectionCard;
