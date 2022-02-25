import Product from "./Product";

export default function Main(props) {
  const { products } = props;
  console.log(products);
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </main>
  );
}
