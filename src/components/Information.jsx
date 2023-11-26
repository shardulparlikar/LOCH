import React from "react";
import LeftInfo from "./LeftInfo";
import RightInfo  from "./RightInfo";


export default function Information() {
  return (
    <>
      <div className="">
        <div className="flex">
          {/* left component */}
          <LeftInfo />

          {/* right component */}
          <RightInfo/>
        </div>
      </div>
    </>
  );
};
