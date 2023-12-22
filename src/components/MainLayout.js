import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineBgColors,
  AiOutlinePicRight,
  AiOutlinePicLeft,
} from "react-icons/ai";
import { SiBrandfolder, SiBlogger } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { FaClipboardList, FaUserAlt } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <p className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">NA</span>
            <span className="lg-logo">NGUYENANH</span>
          </p>
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dasdboard",
            },
            {
              key: "customers",
              icon: <FaUserAlt className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "add-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "add-brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Add-Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "List Brand",
                },
                {
                  key: "add-category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "Add Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-5" />,
                  label: "List Category",
                },
                {
                  key: "add-color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Add Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "List Color",
                },
              ],
            },
            {
              key: "order",
              icon: <FaClipboardList className="fs-4" />,
              label: "Order",
            },
            {
              key: "blogs",
              icon: <SiBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <SiBlogger className="fs-4" />,
                  label: "Add-Blog",
                },
                {
                  key: "list-blogs",
                  icon: <SiBlogger className="fs-4" />,
                  label: "List Blogs",
                },
                {
                  key: "add-blog-category",
                  icon: <SiBlogger className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "list-blogs-category",
                  icon: <SiBlogger className="fs-4" />,
                  label: "List Blogs Category",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center ">
            <div className="position-relative">
              <IoIosNotifications className=" fs-3" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute ">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <main>
            <Outlet></Outlet>
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
