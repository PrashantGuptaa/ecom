import { useNavigate } from "react-router-dom";
import "./components.css";

const Card = (props) => {
  const { product } = props;
  const { image, title, price, id } = product;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} className="img" />
      <div className="title">{title.slice(0, 60)}</div>
      <div className="price">${price}</div>
    </div>
  );
};

export default Card;
