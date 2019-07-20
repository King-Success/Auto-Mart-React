import React from "react";

const Pagination = ({ display, next, prev, hasNext, hasPrev }) => {
  return (
    display && (
      <div
        className="pagination"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontSize: "17px"
        }}
      >
        {hasPrev ? (
          <i
            className="fas fa-arrow-circle-left"
            style={{ marginRight: "auto", cursor: "pointer" }}
            onClick={prev}
          >
            {" "}
            prev
          </i>
        ) : (
          " "
        )}
        {hasNext ? (
          <i
            className="fas fa-arrow-circle-right"
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={next}
          >
            {" "}
            next
          </i>
        ) : (
          " "
        )}
      </div>
    )
  );
};

export default Pagination;
