import { UiAction } from "../../reducers/ui-red";

const Hero: React.FC<{ dispatch: React.Dispatch<UiAction> }> = ({
  dispatch,
}) => {
  const showFormHandler = () => {
    dispatch({ type: "MODAL" });
  };

  return (
    <section
      className={
        "h-full w-full flex-grow flex flex-col items-center md:flex-row gap-5 md:gap-0 p-5"
      }
    >
      <div
        className={
          "h-full flex items-start justify-center gap-5 flex-col md:w-1/2 p-5"
        }
      >
        <h2 className={"text-5xl md:text-6xl"}>Need a touchless menu?</h2>
        <p className={"text-xl text-slate-600 my-5"}>
          You got it! Simply enter the information you need in your menu, and
          you get not only an online menu, but also the QR code for it. Print
          and go!
        </p>
        <button
          onClick={showFormHandler}
          className={
            "bg-rose-500 hover:bg-emerald-400 text-slate-50 px-8 py-3 rounded-xl text-slate-800 text-lg"
          }
        >
          Begin
        </button>
      </div>
      <img
        className={"md:w-1/2"}
        src="https://raw.githubusercontent.com/Medic1111/FOOD-QR/main/client/src/assets/hero.png"
      />
    </section>
  );
};

export default Hero;
