const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p>{item.amount}</p>
    </div>
  );
};

export default CartItem;
