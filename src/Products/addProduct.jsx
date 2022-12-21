import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import "./Product.css";
import ProductsPage from "../pages/ProductsPage";
import { useProducts } from "../contexts/ProductsContext";
import ProductsList from "./ProductsList";

export const ProductContext = createContext();
export const useProduct = () => {
  return useContext(ProductContext);
};

const AddProduct = ({ children }) => {
  const { addProduct, getProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    details: "",
    UrlImg: "",
    price: "",
    category: "",
  });

  const INIT_STATE = {
    product: [],
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "PRODUCT":
        return { ...state, product: action.payload };
      default:
        return state;
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const values = {
    product,
  };

  console.log(state);
  return (
    <div className="fleld .auth-form">
      <h1>Wellcome</h1>
      <h2>Product Create</h2>
      <input
        placeholder="name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        value={product.name}
      />
      <input
        placeholder="details"
        onChange={(e) => setProduct({ ...product, details: e.target.value })}
        value={product.details}
      />
      <input
        placeholder="UrlImg"
        onChange={(e) => setProduct({ ...product, UrlImg: e.target.value })}
        value={product.UrlImg}
      />
      <input
        placeholder="price"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        value={product.price}
      />
      <input
        placeholder="category"
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
        value={product.category}
      />
      <button onClick={() => addProduct(product)}>Add Product</button>
      <br />
      <br />
      <ProductsPage value={values}>{children}</ProductsPage>
    </div>
  );
};

export default AddProduct;
