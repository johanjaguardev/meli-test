import { type } from "@testing-library/user-event/dist/types/setup/directApi";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Store } from "../../store/store";
import { Item } from "../Item/Item";

const Results: FC<{ query?: string }> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const store = new Store();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof search === "object") {
      store
        .getAllItems()
        .then((res) => {
          setData(res.items);
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      store
        .getItemsByQuery(search)
        .then((res) => {
          setData(res.items);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, []);
  return (
    <React.Fragment>
      {data.map((i) => (
        <Item item={i} presentation="grid" />
      ))}
    </React.Fragment>
  );
};

export { Results };
