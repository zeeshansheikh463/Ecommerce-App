import React from "react";
import FeatureCard from "../FeatureCard";
import {getDatabase, ref, set} from "firebase/database";
import { features } from "../../Store/StaticDataStore/StaticData";
import { app } from "../../Firebase";

const FeatureSection = () => {
  return (
    <>      
      {/* Featurs Section Start */}
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            {features.map((val) => {
              const { icon, title, description } = val;
              return (
                <>
                  <div className="col-md-6 col-lg-3">
                    <FeatureCard
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Featurs Section End */}
    </>
  );
};

export default FeatureSection;
