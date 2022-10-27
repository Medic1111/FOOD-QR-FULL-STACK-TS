// NESTED AND RENDERED BY API FORM AS THIS IS
// LAST BEFORE CODE GENERATION

import classes from "../Modal/Modal.module.css";
import { useContext, useState } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { CatInfo, DishInfo } from "../../models/dataType";
import FeedDish from "../FeedDish/FeedDish";

interface Props {
  obj: CatInfo;
  emptyDishes: boolean;
  setEmptyDishes: React.Dispatch<React.SetStateAction<boolean>>;
}

const DishForm: React.FC<Props> = ({ obj, emptyDishes, setEmptyDishes }) => {
  const menuMgr = useContext(MenuCtx);

  const [showAdd, setShowAdd] = useState(false);
  const [showRequired, setShowRequired] = useState(false);
  const [dishInput, setDishInput] = useState<DishInfo>({
    dish: "",
    description: "",
    price: "",
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowAdd(false);
    setShowRequired(false);
    setEmptyDishes(false);
    const { name, value } = e.target;

    setDishInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addDishToCatHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      dishInput.dish !== "" &&
      dishInput.description !== "" &&
      dishInput.price !== ""
    ) {
      const foundItem = menuMgr.menu.find((objRet) => {
        return objRet.category === obj.category;
      });

      if (foundItem !== undefined) {
        menuMgr.setMenu((prev) => {
          let addTo = prev.find((ret, index) => {
            return ret.category === foundItem.category;
          });
          addTo && addTo.dishes.push(dishInput);
          return [...prev];
        });
      }

      setDishInput({
        dish: "",
        description: "",
        price: "",
      });

      setShowAdd(true);
    } else {
      setShowRequired(true);
    }
  };

  return (
    <form className={classes.form}>
      <p className={classes.feedback}>Enter one dish/meal at a time</p>
      <p className={classes.feedback}>
        When you're done with all entries, get your QR Code
      </p>
      <p className={classes.feedback}>Don't forget to print it!</p>
      {emptyDishes && (
        <p className={classes.emptyDish}>Categories cannot be empty</p>
      )}
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>{obj.category}</legend>
        {showRequired && (
          <p className={classes.feedback}>All fields are required</p>
        )}
        {showAdd && <p className={classes.feedback}>Entry Added</p>}
        <input
          name="dish"
          onChange={inputChange}
          value={dishInput.dish}
          placeholder="Dish"
          className={classes.input}
          type="text"
        />
        <input
          name="description"
          onChange={inputChange}
          placeholder="Description"
          className={classes.input}
          type="text"
          value={dishInput.description}
        />
        <input
          name="price"
          onChange={inputChange}
          value={dishInput.price}
          placeholder="price"
          className={classes.input}
          type="text"
        />
        <div className={classes.catFeedBox}>
          {obj.dishes.map((objRet, index) => {
            return <FeedDish key={`DISH_${index}`} objRet={objRet} obj={obj} />;
          })}
        </div>
        <button className={classes.btn} onClick={addDishToCatHandler}>
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default DishForm;
