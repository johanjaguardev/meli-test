import React, { FC, Children, isValidElement } from "react";
type Props = {
  children?: React.ReactNode | null;
};

const Breadcumb: FC<Props> = ({ children }) => {
  const drawChildrens: any = (children: React.ReactNode) => {
    return React.Children.map(children, (child) => {
      // equal to (if (child == null || typeof child == 'string'))
      if (!React.isValidElement(child))
        return <div className="breadcumb__child">{child}</div>;
      return <div className="breadcumb__child">{child}</div>;
    });
  };

  return <div className="breadcumb">{drawChildrens(children)}</div>;
};

export { Breadcumb };
