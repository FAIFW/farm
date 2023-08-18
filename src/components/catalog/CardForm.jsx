import { useState } from 'react';

const CardForm = (props) => {
  const { name, unit, sum, step, price } = props;

  const [qty, setQty] = useState(0);

  const increment = () => {
    setQty(qty + step);
  };

  const decrement = () => {
    setQty(qty - step);
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    const orderData = {
      name,
      qty,
      unit,
      sum: price * qty,
    };

    console.log(orderData);
  }

  return (
    <form className="qty" onSubmit={handleFormSubmit}>
      <div>
        <button type="button" className="qty__btn" onClick={decrement}>
          -
        </button>
        <input
          className="currentQty"
          type="number"
          min="1"
          name="qty"
          onChange={(event) => setQty(event.target.value)}
          value={qty}
          required
        />
        <span>{unit}</span>
        <button type="button" className="qty__btn" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button type="submit" className="toCart">
          В корзину
        </button>
      </div>
    </form>
  );
};

export default CardForm;
