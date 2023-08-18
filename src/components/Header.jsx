import OrderBtn from './OrderBtn';

const Header = () => (
  <header className="header">
    <h1>Натуральные продукты из деревни</h1>
    <OrderBtn />
    <picture>
      <source type="image/png" srcSet="./img/photo.png" alt="Фермеры" />
      <img src="./img/photo.png" alt="Фермеры" />
    </picture>
  </header>
);

export default Header;
