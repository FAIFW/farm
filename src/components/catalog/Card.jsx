import { useState } from 'react';

const Card = (props) => {
  const { id, imageWebp, img, name, pack, price, measureUnit, step, unit } =
    props;

  /*counter*/
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

    console.log(name, event.target.qty.value);
    console.log(orderData);
  }
  /*counter ends*/

  return (
    <div className="card">
      <picture className="card-img">
        <source type="image/webp" src={imageWebp} alt={name} />
        <img type="image/jpg" src={img} alt={name} />
      </picture>
      <div className="card__properties">
        <div>
          <h3 className="card__name">{name}</h3>
          <span>{pack}</span>
        </div>
        <div className="card__price">
          <span>{price}</span>₽/<span>{measureUnit}</span>
        </div>
      </div>
      <form className="qty" onSubmit={handleFormSubmit}>
        <div>
          <button type="button" className="qty__btn" onClick={decrement}>
            -
          </button>
          <input
            className="currentQty"
            type="number"
            min="0"
            name="qty"
            onChange={(event) => setQty(event.target.value)}
            value={qty}
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
    </div>
  );
};

export default Card;
