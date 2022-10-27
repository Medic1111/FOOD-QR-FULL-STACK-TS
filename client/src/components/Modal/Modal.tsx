import Portal from "../../portal/Portal";
import classes from "./Modal.module.css";
import { useReducer } from "react";
import { UiAction } from "../../reducers/ui-red";

import GenForm from "../GenForm/GenForm";
import FormReducer, { FormInitialState } from "../../reducers/form-red";
import ApiForm from "../ApiForm/ApiForm";
import CatForm from "../CatForm/CatForm";
import DishForm from "../DishForm/DishForm";

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<UiAction>;
}

const Modal: React.FC<Props> = ({ setUrl, dispatch }) => {
  const [formState, formDispatch] = useReducer(FormReducer, FormInitialState);

  return (
    <Portal>
      <div className={classes.previewDiv}>
        {formState.general && <GenForm formDispatch={formDispatch} />}
        {formState.category && <CatForm formDispatch={formDispatch} />}
        {/* DISH FORM  is nested in API FORM*/}
        {formState.api && <ApiForm setUrl={setUrl} dispatch={dispatch} />}
        <button
          onClick={() => dispatch({ type: "PREVIEW" })}
          className={classes.btn}
        >
          Preview
        </button>
      </div>
    </Portal>
  );
};

export default Modal;
