import classes from "./Hero.module.css";
import { UiAction } from "../../reducers/ui-red";

const Hero: React.FC<{ dispatch: React.Dispatch<UiAction> }> = ({
  dispatch,
}) => {
  const showFormHandler = () => {
    dispatch({ type: "MODAL" });
  };

  return (
    <section className={classes.hero}>
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>Need a touchless menu?</h2>
        <p className={classes.p}>
          You got it! Simply enter the information you need in your menu, and
          you get not only an online menu, but also the QR code for it. Print
          and go!
        </p>
        <button onClick={showFormHandler} className={classes.btn}>
          Begin
        </button>
      </div>
      <img
        className={classes.pic}
        src="https://raw.githubusercontent.com/Medic1111/FOOD-QR/main/client/src/assets/hero.png"
      />
    </section>
  );
};

export default Hero;
