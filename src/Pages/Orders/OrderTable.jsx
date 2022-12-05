import React, { useContext, useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const OrderTable = ({ order, handleDelete, handleUpdateApproval }) => {
  const { customer, product, message, service, phone, price, _id, status } =
    order;
  const [serviceProduct, setServiceProduct] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceProduct(data);
      });
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            {" "}
            <FaWindowClose className="text-xl"></FaWindowClose>{" "}
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-20 h-20 rounded-full">
              <img
                className="rounded"
                src={
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-36 h-20">
              <img
                className="rounded"
                src={serviceProduct?.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">{product}</h3>
            <span className="badge badge-ghost badge-sm">${price}</span>
          </div>
        </div>
      </td>
      <td>{message}</td>
      <th>
        <button
          onClick={() => handleUpdateApproval(_id)}
          className={`${
            status
              ? "btn btn-outline capitalize border-[#06dd06] py-2 px-6 btn-sm"
              : "btn btn-outline capitalize border-[#ff3811] py-2 px-6 btn-sm"
          }`}
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderTable;
