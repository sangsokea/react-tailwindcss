import React, { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);

  const [error, setError] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    if (password.length < 6 && password.length > 0) {
      setError({
        name: "password",
        message: "Password must be at least 6 characters",
      });
    } else {
      setError({
        name: "",
        message: "",
      });
    }
  }, [password]);

  //   useEffect(callbackFunction, [dependencies])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-blue-400">
        List Product
      </h1>
      <h1 className="text-center">{name}</h1>
      <form action="">
        <div className="p-4 m-4">
          <label htmlFor="name">Name: </label>

          <input onChange={handleChange} type="text" id="name" />
        </div>
        <div className="p-4 m-4">
          <label htmlFor="name">Password: </label>

          <input
            onChange={handlePasswordChange}
            type="password"
            id="password"
          />
        </div>
        <div>
          {error.name === "password" && error.message ? (
            <p className="text-red-500">{error.message}</p>
          ) : (
            ""
          )}
        </div>
      </form>

      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <h1>{product.title}</h1>
              <img src={product.images[0]} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
