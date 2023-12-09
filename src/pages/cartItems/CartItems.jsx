import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteAll,
  increaseQuantity,
} from "../../redux/features/cart/cartSlice";

export default function CartItems() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleRemoveAll = () => {
    dispatch(deleteAll())
  }
  return (
    <Card className="max-w-sm mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="cursor-pointer text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          onClick={handleRemoveAll}
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Remove All
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {items.map((item, index) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    alt="Neil image"
                    height="32"
                    src={item.image}
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${item.price}
                </div>

                <div>
                  <span
                    onClick={() => {
                      handleDecreaseQuantity(item);
                    }}
                    className="text-2xl px-1 bg-red-500 text-white rounded-full cursor-pointer"
                  >
                    -
                  </span>
                  <span className=" mx-1 text-2xl px-1 text-gray-800 rounded-full">
                    {item.quantity}
                  </span>
                  <span
                    onClick={() => {
                      handleIncreaseQuantity(item);
                    }}
                    className="text-2xl px-1 bg-red-500 text-white rounded-full cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
