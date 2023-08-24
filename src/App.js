import "./App.css";
import NavBar from "./components/navbar";
import ProductContainer from "./containers/productContainer";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./containers/productDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductContainer />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
