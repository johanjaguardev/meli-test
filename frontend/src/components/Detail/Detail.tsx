import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <Link to="/results">Results</Link> | <em>{id}</em>
    </React.Fragment>
  );
};

export { Detail };
