import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const quantityRef = useRef();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [purchase, setPurchase] = useState(false);
  useEffect(() => {
    const url = `https://thawing-mesa-46610.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  const {
    _id,
    image,
    name,
    description,
    min_quantity,
    available_quantity,
    price,
  } = product;
  const updateQuantity = () => {
    const quantity = parseInt(quantityRef.current.value);

    if (
      parseInt(min_quantity) > quantity ||
      parseInt(available_quantity) < quantity
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };
  const orderSubmit = (event) => {
    event.preventDefault();
    const quantity = parseInt(quantityRef.current.value);
    const orderPrice = quantity * price;
    const newQuantity = parseInt(available_quantity) - quantity;

    const updateProduct = {
      _id: _id,
      name: name,
      image: image,
      description: description,
      price: price,
      min_quantity: min_quantity,
      available_quantity: newQuantity,
    };

    setProduct(updateProduct);
    const order = {
      image: image,
      name: name,
      email: user.email,
      quantity: quantity,
      price: orderPrice,
      phone: event.target.phone?.value,
      address: event.target.address?.value,
    };
    //send data to the server
    const url = `https://thawing-mesa-46610.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setPurchase(true);
      });
    // create order
    axios
      .post("https://thawing-mesa-46610.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is added!");
          event.target.reset();
        }
      });
  };
  return (
    <div className="card lg:card-side bg-base-100 container mx-auto">
      <figure>
        <img src={image} className="lg:min-w-fit" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-4xl font-bold">{name}</h2>
        <p>{description}</p>
        <p>Minimum Order Quantity: {min_quantity}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Price: ${price}</p>

        <form onSubmit={orderSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                value={user.displayName}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={user.email}
                disabled
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="quantity"
              >
                Order Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="quantity"
                ref={quantityRef}
                onChange={updateQuantity}
                type="text"
                placeholder="Order Quantity"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone or Telephone Number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                name="address"
                type="text"
                placeholder="Enter you address"
              />
            </div>
          </div>

          <div className="w-full">
            <input
              type="submit"
              value="purchase"
              className="btn btn-primary my-5 w-full"
              disabled={buttonDisabled}
            />
          </div>
        </form>
      </div>
      {buttonDisabled === true ? (
        <div className="h-12 w-96 alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Enter valid Order Quantity.</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {purchase === true ? (
        <div className="h-20 text-white alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Purchase;
