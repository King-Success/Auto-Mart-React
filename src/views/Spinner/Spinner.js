import React from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";

const override = css`
  
`;

const Spinner = ({ loading, color }) => {
  return (
    <div className={"fade " + (loading ? "show-fade" : "")}>
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={70}
          color={color || "#092467"}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Spinner;
