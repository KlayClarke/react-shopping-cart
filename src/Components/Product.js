export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <img className="small" src={product.image}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
