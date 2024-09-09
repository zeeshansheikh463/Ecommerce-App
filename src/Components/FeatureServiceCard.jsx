import React from "react";

const FeatureServiceCard = ({featureServices}) => {
    const {imgSrc , title, discount, backgroundClass, contentBackgroundClass , colorGreen} = featureServices;
  return (
    <>
      <div className={`service-item ${backgroundClass}`}>
        <img
          src={imgSrc}
          className="img-fluid rounded-top w-100"
          alt
        />
        <div className="px-4 rounded-bottom">
          <div className={`service-content ${contentBackgroundClass}`}>
            <h5 className="text-white colorGreen">{title}</h5>
            <h3 className="mb-0">{discount}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureServiceCard;
