import { useState } from 'react';

const CardForm = (props, getData) => {
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

  /*
  function handleFormSubmit(event) {
    event.preventDefault();
  }
*/
  return (
    <form className="qty" onSubmit={handleFormSubmit} getData={getData}>
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
        <button
          type="submit"
          className="toCart"
          onClick={() => {
            getData;
          }}
        >
          В корзину
        </button>
      </div>
    </form>
  );
};

export default CardForm;
