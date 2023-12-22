import React from "react";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AddProduct = () => {
  const [desc, setDesc] = useState("");
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="">
          <CustomInput
            i_class="mb-3 "
            type="text"
            label="Enter Product Title"
          />
          <select className="form-control py-2 mb-3" name="" id="">
            <option value="">Select Category</option>
          </select>
          <select className="form-control py-2 mb-3" name="" id="">
            <option value="">Select Brand</option>
          </select>
          <select className="form-control py-2 mb-3" name="" id="">
            <option value="">Select Color</option>
          </select>
          <CustomInput
            i_class="mb-3 "
            type="text"
            label="Enter Product Price"
          />
          <CustomInput
            i_class="mb-3 "
            type="text"
            label="Enter Product Quantity"
          />
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(e) => {
              handleDesc(e);
            }}
          />
          <div className="mt-3">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-2 my-5 "
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
