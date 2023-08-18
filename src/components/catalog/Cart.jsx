const Cart = () => (
  <div className="cart">
    <h3>Корзина</h3>
    <table className="cart-list">
      <tr>
        <td>img</td>
        <td className="cart-list__good"></td>
        <td className="cart-list__total-Qty"></td>
        <td className="cart-list__unit"></td>
        <td className="cart-list__good-Price"></td>
        <td>delete good</td>
      </tr>

      <tr>
        <th>Итого</th>
        <td className="cart-list__total-Price"></td>
      </tr>
    </table>
  </div>
);

export default Cart;
