import React from "react";
import DaumPostCode from "react-daum-postcode";

const Address = () => {
  const width = 595;
  const height = 450;
  const modalStyle = {
    position: "absolute",
    top: 1000,
    marginTop: "300px",
    left: "-178px",
    zIndex: "100",
    border: "3px solid black",
    overflow: "hidden",
  };

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
      <DaumPostCode
        onComplete={handleComplete}
        className="post-code"
        width={width}
        height={height}
        style={modalStyle}
      />
    </div>
  );
};

export default Address;
