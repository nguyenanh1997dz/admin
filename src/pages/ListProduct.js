import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { getProducts } from '../features/products/productSlice';
import { Link } from 'react-router-dom';
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
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
const ListProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.products.products);

  const data1 = [];
  for (let i = 1; i < productState.length; i++) {
    console.log(productState[i].title);
    data1.push({
      key: i,
      name: productState[i].title,
      quantity: productState[i].quantity,
      sold: productState[i].sold,
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div className='mt-4'>
        <h3 className='title'>List Product</h3>
        <div className="mt-4">
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default ListProduct