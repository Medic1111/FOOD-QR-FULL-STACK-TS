import { useContext, useState } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { FormAction } from "../../reducers/form-red";
import FeedCat from "../FeedCat/FeedCat";
import { forms } from "../../styles/forms";

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
    <form onSubmit={submitForm} className={forms.form}>
      <fieldset className={forms.fieldset}>
        <legend className={forms.legend}>Category</legend>
        {showRequired && <p className={forms.feedback}>Field Empty</p>}
        <label className={forms.label}>Begin by entering all categories</label>
        <input
          value={menuCtxManager.catInput.category}
          onChange={(e) =>
            menuCtxManager.setCatInput({
              category: e.target.value,
              dishes: [],
            })
          }
          className={forms.input}
          type="text"
          placeholder="Ex: Appetizer"
        />
        <div className={forms.badgeBox}>
          {menuCtxManager.menu.map((obj, index) => {
            return <FeedCat key={`CAT_${index}`} obj={obj} />;
          })}
        </div>
      </fieldset>

      <button
        onClick={addCategoriesToMenu}
        value="Add category"
        type="submit"
        className={forms.addEntryBtn}
      >
        Add Category
      </button>
      <input className={forms.submit} type="submit" value="Next" />
    </form>
  );
};

export default CatForm;
