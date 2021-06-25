import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "./ProductData";

const ProductDetail = (props) => {
  const params = useParams();

  const p = ProductData.filter((i) => i.id === params.id);

  const content = p[0] && (
    <div>
      <h3>{p[0].title}</h3>
      <p>{p[0].desc}</p>
    </div>
  );

  return <Fragment>{content}</Fragment>;
};

export default ProductDetail;
