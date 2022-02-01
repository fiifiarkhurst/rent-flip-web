import React from "react";
import { Property } from "../types";
import { Card } from "./card";
import { MainComponentProp } from "./types";

function MainComponent({ properties }: MainComponentProp) {
  return (
    <>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {properties?.map((property: Property) => (
            <React.Fragment key={property._id}>
              <Card property={property} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainComponent;
