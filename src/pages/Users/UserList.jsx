import { useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';
import { DataArray } from '@mui/icons-material';
import { userRows } from '../../data';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import './UserList.css'

export default function UserLIst() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = userID  => {
    setUserDatas(userDatas.filter(user => user.id != userID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className='userListUser'>
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160
    }, 
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataArray
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        pageSize={4}
      />
    </div>
  );
}
