import React, { useState } from "react";
import CustomButton from "./Button";

function RightInfo() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="lg:max-w-[45%] bg-white mx-auto flex flex-col justify-center px-4 lg:px-0 py-8 lg:py-0">
      <div className="">
        <div className="font-semibold text-4xl text-[#B0B1B3]">
          <h3>Sign up for</h3>
          <h3>exclusive access.</h3>
        </div>
        <div className="mt-4 input-container">
          <input
            type="email"
            className="custom-input"
            id="email"
            placeholder="Your email address"
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <CustomButton input={email}></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default RightInfo;
