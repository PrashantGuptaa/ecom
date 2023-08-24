import Card from "../components/card";
import './containers.css';

const CardContainer = (props) => {
  const { productList } = props;
  return (
    <div className="card-container">
      {productList.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CardContainer;
