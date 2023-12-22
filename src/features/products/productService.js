import  axios  from "axios";
import { baseUrl } from "../../utils/baseUrl";

const getProducts = async () => {
    const response = await axios.get(`${baseUrl}product/`);
    return response.data;
  };
  const productService = {
    getProducts,
  };
  export default productService;
  