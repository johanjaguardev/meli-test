import "./Breadcumb.scss";
import { FC, Children } from "react";
type Props = {
  children?: React.ReactNode | null;
};

const Breadcumb: FC<Props> = ({ children }) => {
  return (
    <div className="breadcumb">
      <div className="container">
        {Children.map(children, (child) => {
          return <span className="breadcumb__child">{child}</span>;
        })}
      </div>
    </div>
  );
};

export { Breadcumb };
