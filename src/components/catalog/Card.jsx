import CardForm from './CardForm';

const Card = (props) => {
  const { id, imageWebp, img, name, pack, price, measureUnit, step, unit } =
    props;

  /*
  const getData = () => {
    const orderData = {
      name,
      qty,
      unit,
      sum: price * qty,
    };
  };

  //console.log(getData);
*/
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
      <CardForm
        name={name}
        price={price}
        unit={unit}
        step={step}
        //getData={getData}
      />
    </div>
  );
};

export default Card;
