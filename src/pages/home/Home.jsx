import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import CardPlaceHolder from "../../components/common/card/CardPlaceHolder";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsById,
} from "../../redux/features/product/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { error, products, status } = useSelector((state) => state.products);
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchProductsById(14));
  }, []);

  const handleClickCard = (item) => {
    navigate("/detail", { state: item });
  };

  console.log("singleProduct", singleProduct);

  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {status == "loading" &&
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <CardPlaceHolder key={index} />
        ))}
      {status == "succeeded" && products.length > 0 ? (
        products.map((item, index) => (
          <CardComponent
            onClickMyComponent={() => {
              handleClickCard(item);
            }}
            key={index}
            title={item.title}
            price={item.price}
            image={item.images[0]}
            description={item.description}
            id={item.id}
          />
        ))
      ) : (
        <div>Not Found</div>
      )}

      {status == "failed" && <div className="text-red-500">{error}</div>}
    </div>
  );
}
