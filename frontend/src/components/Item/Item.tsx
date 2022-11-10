import { FC } from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";
import "./Item.scss";

const Item: FC<{ item: IItem; presentation: string }> = ({
  item,
  presentation,
}) => {
  return (
    <div className={`item__${presentation}`}>
      <img src={item.picture} alt={item.title} className="item__picture" />
      <Link to={`/items/${item.id}`}>{item.title}</Link>
    </div>
  );
};

export { Item };
