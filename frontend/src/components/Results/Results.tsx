import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Store } from "../../store/store";
import { Breadcumb } from "../Breadcumb/Breadcumb";
import { Item } from "../Item/Item";

const Results: FC<{ query?: string }> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const store = new Store();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (typeof search === "object") {
      store
        .getAllItems()
        .then((res) => {
          setData(res.items);
          setCategory(res.category);
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      store
        .getItemsByQuery(search)
        .then((res) => {
          setData(res.items);
          setCategory(res.category);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, []);
  return (
    <React.Fragment>
      <Breadcumb>{category}</Breadcumb>
      {data.map((i) => (
        <Item item={i} presentation="grid" />
      ))}
    </React.Fragment>
  );
};

export { Results };
