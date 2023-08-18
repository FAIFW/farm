import goodData from '../../data/data';
import Card from './Card';

const Catalog = () => {
  return (
    <section id="catalog" className="cards">
      <h2>Наши товары</h2>
      <div className="cards-grid">
        {goodData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Catalog;
