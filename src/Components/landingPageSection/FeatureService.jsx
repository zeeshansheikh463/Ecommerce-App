import React from "react";

import FeatureServiceCard from "../FeatureServiceCard";

import { featureServices } from "../../Store/StaticDataStore/StaticData";

const FeatureService = () => {
  return (
    <>
      {/* Featurs Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {featureServices.map((val) => {
              return (
                <>
                  <div className="col-md-6 col-lg-4">
                    <FeatureServiceCard  featureServices = {val}/>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Featurs End */}
    </>
  );
};

export default FeatureService;
