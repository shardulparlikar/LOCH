import React from "react";
import LeftInfo from "./LeftInfo";
import RightInfo  from "./RightInfo";


export default function Information() {
  return (
    <>
        <div className="lg:flex">
          {/* left component */}
          <LeftInfo />

          {/* right component */}
          <RightInfo/>
        </div>
    </>
  );
};
