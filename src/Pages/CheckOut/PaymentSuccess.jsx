import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/order/by-transaction-id/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  }, [transactionId]);

  return (
    <div>
      <div>
        <h2 className="text-green-500 text-2xl font-semibold my-2 pb-3">
          Congrats! Successfully Paid
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Your name</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <img src={order.product_img} className="w-40 h-auto rounded-xl" alt="" />
              </td>
              <td className="font-semibold">{order.product}</td>
              <td className="font-semibold">${order.price}</td>
              <td className="font-semibold">{order.customer}</td>
              <td className="font-semibold">{transactionId}</td>
              <td className="font-semibold text-green-500">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
      onClick={()=>window.print()}
      className="bg-[#ff3811] px-6 py-2 rounded-full font-medium text-white border-none mb-5">Print</button>
    </div>
  );
};

export default PaymentSuccess;
