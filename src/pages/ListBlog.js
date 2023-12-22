import React from 'react'
import { Table } from 'antd';
const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 1; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
const ListBlog = () => {
  return (
    <div className='mt-4'>
        <h3 className='title'>List Blogs</h3>
        <div className="mt-4">
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default ListBlog