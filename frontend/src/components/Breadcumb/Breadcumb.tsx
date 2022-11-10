import React, { FC, Children } from "react";
type Props = {
  children?: React.ReactNode | null;
};

const Breadcumb: FC<Props> = ({ children }) => {
  return (
    <div className="breadcumb">
      {Children.map(children, (child) => {
        return <div className="breadcumb__child">{child}</div>;
      })}
    </div>
  );
};

export { Breadcumb };
