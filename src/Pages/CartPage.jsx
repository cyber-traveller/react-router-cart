import React, { useEffect, useState } from "react";
import DiscountPrice from "../components/DiscountPrice";
import emptyCartImage from "../assets/emptycartop.png";
function CartPage({ cartProduct, setCartProduct, data, addTOCart }) {
  return (
    <div className="text-black flex flex-col md:flex-row w-[100%] gap-x-10 md:mt-10">
      {/* left side container */}
      <div className="order-1 md:order-0 overflow-y-auto max-h-[100vh] md:w-[80%] bg-white p-4">
        <div className="flex justify-between items-end w-[100%]">
          <h6 className="md:text-3xl text-xl">Shopping Cart</h6>
          <p>Price</p>
        </div>
        <hr />
        {cartProduct && cartProduct.length > 0 ? (
          <>
            {cartProduct.map((item) => (
              <div
                key={item.id}
                className="p-4 border-b border-gray-500 transition-all  hover:shadow-md mt-2 text-[0.9em]"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-24 md:size-40 object-scale-down mr-4"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-medium text-start md:text-lg">
                        {item.title}
                      </h3>
                      {item.rating && (
                        <div className="flex">
                          <span className="ml-2 text-yellow-500">
                            ★ {item.rating.rate}
                          </span>
                        </div>
                      )}

                      <span className="items-start flex flex-col gap-1">
                        <span className=" text-green-500">in stock</span>
                        <span className="font-semibold flex">
                          Category:&nbsp;
                          <span className="font-normal inline">
                            {item.category}
                          </span>
                        </span>
                      </span>
                      <span className=" text-green-500 self-start flex">
                        Eligible for Free Shipping
                      </span>
                      <div className="flex justify-between items-center mt-2 w-[12rem] md:w[20rem] lg:w-[25rem] xl:w-[47rem]">
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => {
                              setCartProduct(
                                cartProduct.map((product) => {
                                  if (
                                    product.id === item.id &&
                                    product.quantity > 1
                                  ) {
                                    return {
                                      ...product,
                                      quantity: product.quantity - 1,
                                      subTotal:
                                        product.price * (product.quantity - 1),
                                    };
                                  }
                                  return product;
                                })
                              );
                            }}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100 "
                          >
                            -
                          </button>
                          <span className="px-2 py-1">{item.quantity}</span>
                          <button
                            onClick={() => {
                              setCartProduct(
                                cartProduct.map((product) => {
                                  if (product.id === item.id) {
                                    return {
                                      ...product,
                                      quantity: product.quantity + 1,
                                      subTotal:
                                        product.price * (product.quantity + 1),
                                    };
                                  }
                                  return product;
                                })
                              );
                            }}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold text-xl">
                          ${item.subTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-end mt-2 space-x-2 text-sm">
                  <button className="text-gray-500 hover:text-pink-700 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Move to Favourites
                  </button>
                  <button
                    onClick={() => {
                      // addTOCart can be used to delete the item from the cart also
                      addTOCart(item.id);
                    }}
                    className="text-gray-500 flex items-center hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className=" p-4 h-52 flex items-center justify-center">
            <img
              className="size-10 animate-bounce"
              src={emptyCartImage}
              alt="empty_cart image"
            />
            Your cart is empty
          </div>
        )}
      </div>
      {/* right side container */}
      <div className="md:order-1  md:sticky top-10 overflow-scroll md:top-20 h-fit py-2 md:py-10 px-4 mt-2  md:w-96 bg-white rounded-lg shadow-xl ">
        <span className="text-green-400 text-sm mb-4 flex items-center">
          <span className="material-symbols-outlined">check_circle</span>
          You products are eligible for FREE Delivery
        </span>
        <DiscountPrice
          price={data.totalPrice}
          discountPercentage={10}
          totalItems={data.totalQuantity}
        />
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => {
              if (cartProduct.length === 0) {
                alert("your cart is empty");
                return;
              }
              //under development feature
              // setCartProduct([]);
              alert("Order placed successfully Thank you for shopping with us");
            }}
            className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition duration-300"
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
