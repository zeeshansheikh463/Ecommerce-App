import React from "react";
import FactSectionCard from "../FactSectionCard";
import { factData } from "../../Store/StaticDataStore/StaticData";
const FactSection = () => {
  return (
    <>
      <div class="container-fluid py-5">
        <div class="container">
          <div class="bg-light p-5 rounded">
            <div class="row g-4 justify-content-center">
              {factData.map((val) => {
                return (
                  <>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                      <FactSectionCard factData = {val}/>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactSection;
