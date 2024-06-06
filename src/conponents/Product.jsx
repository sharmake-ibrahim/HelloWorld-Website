import Products from "./Products";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-container">
      <h1> This is a Product Page</h1>
      {Products.map((product) => {

      
          return(
            <Link to={`/product/${product.id}`}>
            <div className="product" key={product.id}>
                  <h1>{product.name}</h1>
                  <p>{product.price}</p>
                </div>
            </Link>
                 
                ) })}

      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Product;
