import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";
import { Store } from "../../store/store";
import { IItem } from "../../interfaces/IItem";

const Detail = () => {
  const { id } = useParams();
  const store = new Store();
  const [data, setData] = useState({} as IItem);

  useEffect(() => {
    if (typeof id === "string") {
      store
        .getItemById(id)
        .then((res) => {
          setData(res[0].item as IItem);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, []);
  return (
    <React.Fragment>
      <Item item={data} presentation="detail" />
    </React.Fragment>
  );
};

export { Detail };
