export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  let total = 0;

  for (let item of cartItems) {
    total += item.price * item.qty;
  }
  return (
    <aside className="block col-1">
      <h1>Subtotal: ${total}</h1>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && (
          <>
            <div>Cart Is Empty</div>
          </>
        )}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </aside>
  );
}
