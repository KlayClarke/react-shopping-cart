export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onCheckout, total } = props;

  return (
    <div className="block col-1">
      <h1>Subtotal: ${total.toFixed(2)}</h1>
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
      {cartItems.length > 0 && (
        <button onClick={onCheckout}>Continue Checkout</button>
      )}
    </div>
  );
}
