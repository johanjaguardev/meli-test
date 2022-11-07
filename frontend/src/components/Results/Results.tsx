import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Results: FC<{ query: string }> = ({ query }) => {
  const location = useLocation();

  if (location.state.query !== "") {
    query = location.state.query;
  }

  return (
    <React.Fragment>
      <b>Query: </b>
      {query}
    </React.Fragment>
  );
};

export { Results };
