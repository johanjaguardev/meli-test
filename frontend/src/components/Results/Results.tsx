import React, { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";
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
    <div className="results">
      <Breadcumb>{category}</Breadcumb>
      {data.map((i: IItem) => (
        <Item item={i} presentation="grid" key={i.id} />
      ))}
    </div>
  );
};

export { Results };
