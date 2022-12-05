import React, { useEffect, useRef, useState } from "react";
import ServicesItems from "./ServicesItems";

// http://localhost:5000/
// http://localhost:5000/

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [isAse, setIsAse] = useState(true);
  const searchRef = useRef();

  useEffect(() => {
    fetch(
      // `http://localhost:5000/?search=${search}&order=${
      //   isAse ? "asc" : "des"
      // }`
      `http://localhost:5000/services`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // isAse, search
  // const handleSearch = () => {
  //   setSearch(searchRef.current.value);
  // };

  return (
    <div className="lg:py-12 py-3 px-2">
      <div>
        <div className="text-center">
          <p className="lg:text-2xl text-xl text-[#FF3811] font-bold">
            Services
          </p>
          <h2 className="lg:text-5xl text-3xl font-bold my-3">
            Our Service Area
          </h2>
          <p className="lg:w-1/2 w-full mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="py-4">
          <input
            ref={searchRef}
            type="text"
            className="input-sm border-2 rounded-full"
          />{" "}
          <button
            // onClick={handleSearch}
            className="bg-[#FF3811] hover:bg-black rounded-full hover:text-white py-1 px-8 font-semibold border-2 border-[#FF3811] hover:border-[black]"
          >
            Search
          </button>
        </div>
        <div>
          <span className="text-xl font-semibold">Price: </span>
          <button
            // onClick={() => setIsAse(!isAse)}
            className="btn bg-transparent text-black border hover:text-white rounded px-6"
          >
            {isAse ? "High to Low" : "Low to High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {services.map((service) => (
          <ServicesItems key={service._id} service={service}></ServicesItems>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline border-[#ff3811] text-[#ff3811] py-2 px-12">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
