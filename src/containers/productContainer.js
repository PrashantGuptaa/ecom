import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_HOST_URL } from "./../config";
import CardContainer from "./cardContainer";
import Loader from "../components/loader";

const ProductContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BACKEND_HOST_URL}products`,
      });
      setProductList(response.data);
    } catch (e) {
      console.error(e);
    }
  };


  console.log("product list", productList);
  return (
    <div>
      {productList.length === 0 ? (
        <Loader />
      ) : (
        <CardContainer productList={productList} />
      )}
    </div>
  );
};

export default ProductContainer;
// truthy and falsy values
