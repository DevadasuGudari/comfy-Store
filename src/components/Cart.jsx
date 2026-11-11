import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils.js';

const CartItem = ({ id, name, price, image, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useCart();

  return (
    <article className="cart-item">
      <img src={image} className="cart-item-img" alt={name} />
      <div>
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>
        <button className="cart-item-remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button
          className="cart-item-increase-btn"
          onClick={() => increaseAmount(id)}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">{amount}</p>
        <button
          className="cart-item-decrease-btn"
          onClick={() => decreaseAmount(id)}
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
