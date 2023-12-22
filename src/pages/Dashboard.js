import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
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
const Dashboard = () => {
  const data = [
    {
      type: '1',
      sales: 38,
    },
    {
      type: '2',
      sales: 52,
    },
    {
      type: '3',
      sales: 61,
    },
    {
      type: '4',
      sales: 145,
    },
    {
      type: '5',
      sales: 48,
    },
    {
      type: '6',
      sales: 38,
    },
    {
      type: '7',
      sales: 38,
    },
    {
      type: '8',
      sales: 38,
    },
    {
      type: '9',
      sales: 38,
    },
    {
      type: '9',
      sales: 38,
    },
    {
      type: '10',
      sales: 38,
    },
    {
      type: '11',
      sales: 38,
    },
    {
      type: '12',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return (
    <div>
      <h3>Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center mt-4 gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3>Income Static</h3>
        <div className="mt-4">
        <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3>Recent Orders</h3>
        <div className="mt-4">
        <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
