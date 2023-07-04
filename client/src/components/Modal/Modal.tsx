import Portal from "../../portal/Portal";
import { useReducer } from "react";
import { UiAction } from "../../reducers/ui-red";

import GenForm from "../GenForm/GenForm";
import FormReducer, { FormInitialState } from "../../reducers/form-red";
import ApiForm from "../ApiForm/ApiForm";
import CatForm from "../CatForm/CatForm";

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<UiAction>;
}

const Modal: React.FC<Props> = ({ setUrl, dispatch }) => {
  const [formState, formDispatch] = useReducer(FormReducer, FormInitialState);

  return (
    <Portal>
      <div className={" h-full w-full grow flex-grow "}>
        {formState.general && <GenForm formDispatch={formDispatch} />}
        {formState.category && <CatForm formDispatch={formDispatch} />}
        {/* DISH FORM  is nested in API FORM*/}
        {formState.api && <ApiForm setUrl={setUrl} dispatch={dispatch} />}
        <button
          onClick={() => dispatch({ type: "PREVIEW" })}
          className={
            " ml-10 underline rounded-xl h-[5vh] text-xl outline-rose-500 hover:text-rose-500"
          }
        >
          Preview
        </button>
      </div>
    </Portal>
  );
};

export default Modal;
