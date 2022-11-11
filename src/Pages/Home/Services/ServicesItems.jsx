import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesItems = ({ service }) => {
  const { _id, title, img, price } = service;

  console.log(_id)

  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[40vh]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-[#FF3811] font-semibold text-xl">
              Price: ${price}
            </p>
            <Link to={`/checkout/${_id}`}>
              <FaArrowRight className="text-[#ff3811]"></FaArrowRight>
            </Link>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn py-2 px-12 bg-[#ff3811] border-none text-white hover:bg-black">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItems;
