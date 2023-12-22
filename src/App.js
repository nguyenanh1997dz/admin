import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import Order from "./pages/Order";
import Customer from "./pages/Customer";
import AddProduct from "./pages/AddProduct";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import ListBlog from "./pages/ListBlog";
import ListBlogCategory from "./pages/ListBlogCategory";
import ListProduct from "./pages/ListProduct";
import AddBrand from "./pages/AddBrand";
import ListBrand from "./pages/ListBrand";
import AddCategory from "./pages/AddCategory";
import ListCategory from "./pages/ListCategory";
import AddColor from "./pages/AddColor";
import ListColor from "./pages/ListColor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<Resetpassword />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="order" element={<Order />} />

          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ListProduct />} />

          <Route path="add-category" element={<AddCategory />} />
          <Route path="list-category" element={<ListCategory />} />

          <Route path="add-brand" element={<AddBrand />} />
          <Route path="brand-list" element={<ListBrand />} />

          <Route path="add-color" element={<AddColor />} />
          <Route path="list-color" element={<ListColor />} />

          <Route path="list-blogs" element={<ListBlog />} />
          <Route path="list-blogs-category" element={<ListBlogCategory />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-blog-category" element={<AddBlogCategory />} />

          <Route path="customers" element={<Customer />} />
        </Route>
      </Routes> 
    </Router>
  );
}

export default App;
