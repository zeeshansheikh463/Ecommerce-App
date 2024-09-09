import React from "react";

const FeatureCard = ({icon, title, description}) => {
  
  return (
    <>
      <div className="featurs-item text-center rounded bg-light p-4">
        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
          <i className={`${icon}`}/>
        </div>
        <div className="featurs-content text-center">
          <h5>{title}</h5>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
