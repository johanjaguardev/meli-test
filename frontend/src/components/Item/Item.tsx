import { FC } from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../interfaces/IItem";
import shippingIcon from "./../../../public/ic_shipping@2x.png";
import "./Item.scss";

const Item: FC<{ item: IItem; presentation: string }> = ({
  item,
  presentation,
}) => {
  return (
    <div className={`item item__${presentation}`}>
      <div className="container">
        <div className="item__column-1">
          <img src={item.picture} alt={item.title} className="item__picture" />
          {item.description !== undefined && (
            <div className="item__description">
              <h3>Descripción del producto</h3>
              <p>{item.description}</p>
            </div>
          )}
        </div>

        <div className="item__column-2">
          {presentation === "detail" && (
            <div className="item__condition-box">
              <span className="item__condition">{item.condition}</span> -{" "}
              <span className="item__sold_quantity">
                {item.sold_quantity} vendidos
              </span>
            </div>
          )}
          <h2 className="item__title">
            {presentation === "grid" ? (
              <Link to={`/items/${item.id}`}>{item.title}</Link>
            ) : (
              item.title
            )}
          </h2>

          <div className="item__price-box">
            {item.price !== undefined && (
              <div className="item__price">
                <span className="item__price-amount">{item.price.amount}</span>
                {presentation === "detail" && (
                    <sup className="item__price-decimal">
                      {item.price.decimal}
                    </sup>
                  ) && (
                    <span className="item__price-currency">
                      {item.price.currency}
                    </span>
                  )}
              </div>
            )}
            {presentation === "grid" && item.free_shipping && (
              <div className="item__free_shipping">
                <img src={shippingIcon} className="item__free_shipping-icon" />
              </div>
            )}

            <div className="item__free_shipping"></div>
          </div>
          {presentation === "detail" && (
            <button className="item__button">Comprar</button>
          )}
        </div>
        {presentation === "grid" && (
          <div className="item__column-3 item__location">{item.location}</div>
        )}
      </div>
    </div>
  );
};

export { Item };
