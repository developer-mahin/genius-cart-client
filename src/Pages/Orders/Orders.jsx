import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import OrderTable from "./OrderTable";

const Orders = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://genius-car-server008-developer-mahin.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jsonToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userLogOut()
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        }
       return res.json()
      })
      .then((data) => {
        console.log(data)
        setOrders(data.data);
      });
  }, [user?.email, userLogOut]);

  console.log(orders);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete the product");
    if (proceed) {
      fetch(`https://genius-car-server008-developer-mahin.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.deletedCount > 0) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdateApproval = (id) => {
    fetch(`https://genius-car-server008-developer-mahin.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const approving = orders.find((order) => order._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full my-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Customer</th>
            <th>Product</th>
            <th>Message</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <OrderTable
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleUpdateApproval={handleUpdateApproval}
            ></OrderTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
