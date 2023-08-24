const ProductDetailsLayout = (props) => {
  const { product } = props;
  const { title, image, category, description, price } = product;
  return (
    <section className="layout">
      <h3 className="heading">Product Details</h3>
      <div className="det">
        <img src={image} alt={title} className="image" />
        <section className="text-data">
          <h3>{title}</h3>
          <div>{description}</div>
          <div>Category: {category} </div>
          <h4 className="pricing">Price: ${price}</h4>
        </section>
      </div>
    </section>
  );
};

export default ProductDetailsLayout;
