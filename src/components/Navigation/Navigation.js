import { NavLink, Outlet } from 'react-router-dom';
// import s from './Navigation.module.scss';

const Navigation = () => (
  <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="uah-usd"
        // className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        USD
      </NavLink>
      <NavLink
        to="uah-eur"
        // className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        EUR
      </NavLink>
      <NavLink
        to="uah-pln"
        // className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        PLN
      </NavLink>
    </nav>
    <Outlet />
  </div>
);
export default Navigation;
