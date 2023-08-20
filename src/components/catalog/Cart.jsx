const Cart = () => (
  <div className="cart">
    <h3>Корзина</h3>
    <table className="cart-list">
      <tbody>
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
      </tbody>
    </table>
  </div>
);

export default Cart;
