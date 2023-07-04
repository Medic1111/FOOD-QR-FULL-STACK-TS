import { useState, useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { FormAction } from "../../reducers/form-red";
import { forms } from "../../styles/forms";

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
    <form onSubmit={addFormToMenuHandler} className={forms.form}>
      <fieldset className={forms.fieldset}>
        <legend className={forms.legend}>General Info</legend>

        <label className={forms.label} htmlFor="resName">
          {" "}
          Restaurant Name
        </label>
        <input
          className={forms.input}
          name="resName"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resName}
          id="resName"
          type="text"
        />
        <label className={forms.label} htmlFor="resAddress">
          {" "}
          Address
        </label>
        <input
          className={forms.input}
          name="resAddress"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resAddress}
          type="text"
          id="resAddress"
        />
        <label className={forms.label} htmlFor="resNumber">
          Phone Number
        </label>
        <input
          className={forms.input}
          name="resNumber"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resNumber}
          type="text"
          id="resNumber"
        />
        <label className={forms.label} htmlFor="resHours">
          Business Hours
        </label>
        <input
          className={forms.input}
          name="resHours"
          onChange={changeInputHandler}
          value={menuMgr.genInput.resHours}
          type="text"
          id="resHours"
        />
        {showRequired && (
          <p className={forms.feedback}>All fields are required</p>
        )}
      </fieldset>
      <input type="submit" className={forms.submit} value="Next" />
    </form>
  );
};

export default GenForm;
