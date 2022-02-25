export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt=" "></img>
      <h4 className="product-name">{product.name}</h4>
      <div>${product.price}</div>
      <div>
        <input type="number" min={"1"} id={product.id}></input>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
