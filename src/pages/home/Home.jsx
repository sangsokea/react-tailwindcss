import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import CardPlaceHolder from "../../components/common/card/CardPlaceHolder";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // fetch successful
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleClickCard = (item) => {
    navigate("/detail", {state: item})
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {loading &&
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <CardPlaceHolder key={index} />
        ))}
      {!loading &&
        products.map((item, index) => (
          <CardComponent
            onClickMyComponent={() => {
              handleClickCard(item);
            }}
            key={index}
            title={item.title}
            price={item.price}
            image={item.images[0]}
          />
        ))}
    </div>
  );
}
