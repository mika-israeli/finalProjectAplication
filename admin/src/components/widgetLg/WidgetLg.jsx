import { useEffect, useState } from "react";
<<<<<<< HEAD
import { getOrders } from "../../redux/apiCalls";
=======
import { getFiveNewOrders } from "../../redux/apiCalls";
>>>>>>> saarbranchv4
import "./widgetLg.css";
import {format} from "timeago.js"




export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOr = async()=> {
<<<<<<< HEAD
      const res = await getOrders();
      
=======
      const res = await getFiveNewOrders();
      console.log(res);
>>>>>>> saarbranchv4
      setOrders(res)
    }
    getOr()
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
          
        ))}
        </tbody>
      </table>
    </div>
  );
}
