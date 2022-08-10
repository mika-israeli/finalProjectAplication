import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { useEffect,useState } from "react";
import { getOrders, updateOrder } from "../../redux/apiCalls";

export default function OrderList() {

    
    const [orders,setOrders] = useState([]);
    const [status,setStatus] = useState('pending')

    useEffect(()=>{
        const getOr = async() => {
            const res = await getOrders();
            const data = res.filter((ord)=>ord.status!=='arrived')
            setOrders(data);
            console.log(res);
        }
        getOr()
    },[])

    const changeStatusHandler = (orderId,newStatus) => {
        updateOrder(orderId,{status: newStatus});
        window.location.reload(false)
    }

  const columns = [
    
    {
      field: "order",
      headerName: "Order No.",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderListItem">
            {params.row._id}
          </div>
        );
      },
    },
    { field: "userId", headerName: "User ID", width: 220 },
    {
      field: "amount",
      headerName: "Total Price",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
        field: "change",
        headerName: "Change Status",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="orderListItem">
              <select onChange={(e)=>setStatus(e.target.value)}>
                <option>pending</option>
                <option>shipping</option>
                <option>arrived</option>
                <option>processing</option>
              </select>
            </div>
          );
        },
      },
      {
        field: "update",
        headerName: "Update",
        width: 150,
        renderCell: (params) => {
            return(
                <>
                    <button className="orderListEdit" onClick={()=>changeStatusHandler(params.row._id,status)}>UPDATE</button>
                </>
            )
        }
      }
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
