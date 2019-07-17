import React from "react";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ loading, color }) => {
  return (
    <div className="sweet-loading">
      <HashLoader
        css={override}
        sizeUnit={"px"}
        size={25}
        color={color || "#092467"}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
