import { useParams, Link } from "react-router-dom";
import Products from "./Products";

const SingleProduct = () => {
  const params = useParams();
  console.log(params);
  const SingleProduct = Products.find(
    (product) => product.id === Number(params.id),
  );
  console.log(SingleProduct);
  const { imageUrl, name, description } = SingleProduct;
  return (
    <div className="single-product">
      <img src={imageUrl} loading="lazy" />
      <h1>{name}</h1>
      <p> {description}</p>
      <Link to="/product">Go back</Link>
    </div>
  );
};

export default SingleProduct;
