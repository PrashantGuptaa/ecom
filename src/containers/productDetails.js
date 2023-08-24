import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import ProductDetailsLayout from "../components/productDetailsLayout";
import { BACKEND_HOST_URL } from "../config";

const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const { productId } = useParams();

  console.log("Product Id", productId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${BACKEND_HOST_URL}products/${productId}`,
      });
      setDetails(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(details);

  return (
    <div className="details">
      {details ? <ProductDetailsLayout product={details} /> : <Loader />}{" "}
    </div>
  );
};

export default ProductDetails;
