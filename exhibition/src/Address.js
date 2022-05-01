import React from "react";
import DaumPostCode from "react-daum-postcode";

const Address = () => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(fullAddress);
  };

  return (
    <div>
      <DaumPostCode onComplete={handleComplete} className="post-code" />
    </div>
  );
};

export default Address;
