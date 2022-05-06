import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "951410214834-qprsumijt1b7135q3mv144jm5iqve06d.apps.googleusercontent.com";

export default function Google({}) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    console.log(response);
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
