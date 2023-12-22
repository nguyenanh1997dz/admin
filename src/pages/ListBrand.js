import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import { getBrands } from '../features/brand/brandSlice';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  
const ListBrand = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  const brandState = useSelector((state) => state.brands.brands);
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    console.log(brandState[i]);
    data1.push({
      key: i+1,
      title: brandState[i].title,
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
  console.log(brandState);
  return (
    <div className='mt-4'>
        <h3 className='title'>List Brand</h3>
        <div className="mt-4">
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default ListBrand