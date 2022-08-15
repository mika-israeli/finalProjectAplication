import "./analytics.css";
import { DataGrid } from "@material-ui/data-grid";
import { getOnline } from "../../redux/apiCalls";
import { useEffect, useState } from "react";

const Analytics = () => {
//blablabla
  const [data,setData] = useState([])
  useEffect(async()=>{
    const res = await getOnline();
    setData(res);
    console.log(res);
  },[])
  
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default Analytics
