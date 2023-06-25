import React from "react";

function Verified({ post }) {
  return (
    <>{post.isValidate && <img src={post.verification} alt="Verificado" />}</>
  );
}

export default Verified;
