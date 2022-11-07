import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Results: FC<{ query?: string }> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <React.Fragment>
      <b>Query: </b> <Link to="/items/1">{search}</Link>
    </React.Fragment>
  );
};

export { Results };
