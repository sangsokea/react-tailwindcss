import React, { useEffect, useState } from "react";
import CardDetails from "../../components/common/card/CardDetails";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    }
  }, []);
  
  return (
    <div>
      {product && (
        <CardDetails
          title={product.title}
          description={product.description}
          image={product.images[0]}
        />
      )}
    </div>
  );
}
