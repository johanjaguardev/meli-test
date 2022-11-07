import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <b>Details:</b> {id}
    </React.Fragment>
  );
};

export { Detail };
