import "./history.css";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { useEffect,useState } from "react";
import { getOrders } from "../../redux/apiCalls";

export default function History() {

    
    const [orders,setOrders] = useState([]);
   

    useEffect(()=>{
        const getOr = async() => {
            const res = await getOrders();
            const data = res.filter((ord)=>ord.status === "arrived")
            setOrders(data);
        }
        getOr()
    },[])

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
