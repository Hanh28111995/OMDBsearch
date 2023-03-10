import React from 'react'
import { Space, Table, Input, Button, Image, } from 'antd';


export default function TimeOffForm() {
  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      key: 'maPhim',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      render: (text) => {
        return <Image src={`${text}`} className='img-fluid' width={50} />
      }
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      key: 'tenPhim',
    },
    {
      title: 'Ngày Khởi Chiếu',
      dataIndex: 'ngayKhoiChieu',
      key: 'ngayKhoiChieu',
      // render: (text) => {
      //   return <span>{formatDate3(text)}</span>
      // }
    },



  ];

  return (
    <Table rowKey='maPhim' columns={columns}
       />
  )
}
