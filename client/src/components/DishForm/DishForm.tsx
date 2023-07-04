// NESTED AND RENDERED BY API FORM AS THIS IS
// LAST BEFORE CODE GENERATION

import { useContext, useState } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { CatInfo, DishInfo } from "../../models/dataType";
import FeedDish from "../FeedDish/FeedDish";
import { forms } from "../../styles/forms";

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
    <form className={forms.subform}>
      {emptyDishes && (
        <p className={forms.feedback}>
          No categories can be empty, please review the empty ones
        </p>
      )}
      <fieldset className={forms.fieldset}>
        <legend className={forms.legend}>{obj.category}</legend>
        {showRequired && (
          <p className={forms.feedback}>All fields are required</p>
        )}
        {showAdd && <p className={forms.feedback}>Entry Added</p>}
        <input
          name="dish"
          onChange={inputChange}
          value={dishInput.dish}
          placeholder="Dish"
          className={forms.input}
          type="text"
        />
        <input
          name="description"
          onChange={inputChange}
          placeholder="Description"
          className={forms.input}
          type="text"
          value={dishInput.description}
        />
        <input
          name="price"
          onChange={inputChange}
          value={dishInput.price}
          placeholder="price"
          className={forms.input}
          type="text"
        />
        <div className={forms.badgeBox}>
          {obj.dishes.map((objRet, index) => {
            return <FeedDish key={`DISH_${index}`} objRet={objRet} obj={obj} />;
          })}
        </div>
        <button className={forms.addEntryBtn} onClick={addDishToCatHandler}>
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default DishForm;
