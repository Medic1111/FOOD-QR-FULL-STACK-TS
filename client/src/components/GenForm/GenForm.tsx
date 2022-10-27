import classes from "../Modal/Modal.module.css";
import { useState, useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { FormAction } from "../../reducers/form-red";

const GenForm: React.FC<{ formDispatch: React.Dispatch<FormAction> }> = ({
  formDispatch,
}) => {
  const menuMgr = useContext(MenuCtx);
  const [showRequired, setShowRequired] = useState(false);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowRequired(false);
    const { name, value } = event.target;

    menuMgr.setGenInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addFormToMenuHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      menuMgr.genInput.resAddress !== "" &&
      menuMgr.genInput.resName !== "" &&
      menuMgr.genInput.resNumber !== "" &&
      menuMgr.genInput.resHours !== ""
    ) {
      menuMgr.setGenInput(menuMgr.genInput);
      formDispatch({ type: "CATEGORY" });
    } else {
      setShowRequired(true);
    }
  };

  return (
    <form onSubmit={addFormToMenuHandler} className={classes.form}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.legend}>General Info</legend>
        {showRequired && (
          <p className={classes.feedback}>All fields are required</p>
        )}
        <label className={classes.label} htmlFor="resName">
          {" "}
          Restaurant Name
        </label>
        <input
          className={classes.input}
          name="resName"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resName}
          id="resName"
          type="text"
        />
        <label className={classes.label} htmlFor="resAddress">
          {" "}
          Address
        </label>
        <input
          className={classes.input}
          name="resAddress"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resAddress}
          type="text"
          id="resAddress"
        />
        <label className={classes.label} htmlFor="resNumber">
          Phone Number
        </label>
        <input
          className={classes.input}
          name="resNumber"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resNumber}
          type="text"
          id="resNumber"
        />
        <label className={classes.label} htmlFor="resHours">
          Business Hours
        </label>
        <input
          className={classes.input}
          name="resHours"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resHours}
          type="text"
          id="resHours"
        />
      </fieldset>
      <input type="submit" className={classes.btn} value="Next" />
    </form>
  );
};

export default GenForm;
