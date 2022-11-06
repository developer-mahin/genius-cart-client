import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./checkOut.css";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, img, title, price } = service.data;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip_code = form.zipCode.value;

    const order = {
      product: title,
      service: _id,
      customer: name,
      price,
      email,
      phone,
      message,
      city,
      state,
      zip_code,
    };

    fetch("https://genius-car-server008.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="relative">
        <div className="w-full h-72 checkOut__banner">
          <img
            src={img}
            className="object-cover  w-full h-full rounded-xl "
            alt=""
          />
        </div>
        <div className="absolute top-32 left-20 text-white px-4 text-4xl font-bold ">
          <h2>{title}</h2>
        </div>
      </div>

      <section className="lg:p-6 p-0 bg-gray-200 text-black rounded lg:w-3/4 w-full mx-auto lg:py-20 py-10 lg:my-20 my-10">
        <form
          onSubmit={handlePlaceOrder}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <input
                  id="firstname"
                  type="text"
                  name="firstName"
                  required
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="lastname"
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  defaultValue={user?.email || "unregistered"}
                  readOnly
                  placeholder="Enter your email address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full h-28 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  placeholder="Your city"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="state"
                  type="text"
                  name="state"
                  required
                  placeholder="State / Province"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <input
                  id="zip"
                  type="text"
                  name="zipCode"
                  required
                  placeholder="ZIP / Postal"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 py-2 px-4"
                />
              </div>
            </div>
          </fieldset>
          <div>
            <input
              type="submit"
              className="btn bg-[#ff3811] w-full border-none text-white capitalize"
              value="Order Confirm"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default CheckOut;
