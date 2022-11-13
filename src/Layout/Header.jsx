import mealsImg from "../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals Apps</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Better Food Yummy" />
      </div>
    </>
  );
};

export default Header;
