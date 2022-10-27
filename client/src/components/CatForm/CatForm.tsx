import classes from "../Modal/Modal.module.css";
import { useContext, useState } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { FormAction } from "../../reducers/form-red";
import FeedCat from "../FeedCat/FeedCat";

const CatForm: React.FC<{ formDispatch: React.Dispatch<FormAction> }> = ({
  formDispatch,
}) => {
  const menuCtxManager = useContext(MenuCtx);
  const [showRequired, setShowRequired] = useState(false);

  const addCategoriesToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowRequired(false);
    e.preventDefault();
    if (menuCtxManager.catInput.category === "") {
      return setShowRequired(true);
    }
    menuCtxManager.setMenu((prev) => [...prev, menuCtxManager.catInput]);
    menuCtxManager.setCatInput({ category: "", dishes: [] });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (menuCtxManager.menu.length <= 0) {
      return setShowRequired(true);
    }
    formDispatch({ type: "API" });
  };

  return (
    <form onSubmit={submitForm} className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>Category</legend>
        {showRequired && <p className={classes.feedback}>Field Empty</p>}
        <label className={classes.label}>
          Begin by entering all categories
        </label>
        <input
          value={menuCtxManager.catInput.category}
          onChange={(e) =>
            menuCtxManager.setCatInput({
              category: e.target.value,
              dishes: [],
            })
          }
          className={classes.input}
          type="text"
          placeholder="Ex: Appetizer"
        />
      </fieldset>
      <div className={classes.catFeedBox}>
        {menuCtxManager.menu.map((obj, index) => {
          return <FeedCat key={`CAT_${index}`} obj={obj} />;
        })}
      </div>
      <button
        onClick={addCategoriesToMenu}
        value="Add category"
        type="submit"
        className={classes.btn}
      >
        Add Category
      </button>
      <input className={classes.btn} type="submit" value="Next" />
    </form>
  );
};

export default CatForm;
