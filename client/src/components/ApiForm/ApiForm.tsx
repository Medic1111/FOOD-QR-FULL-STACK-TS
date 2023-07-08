import React, { useContext, useState } from "react";
import DishForm from "../DishForm/DishForm";
import axios from "axios";
import { MenuCtx } from "../../store/menu-ctx";
import { UiAction } from "../../reducers/ui-red";
import { forms } from "../../styles/forms";

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<UiAction>;
}

const ApiForm: React.FC<Props> = ({ setUrl, dispatch }) => {
  const menuMgr = useContext(MenuCtx);
  const [serverErr, setServerErr] = useState(false);
  const [emptyDishes, setEmptyDishes] = useState(false);

  const configMenu = {
    genInput: menuMgr.genInput,
    menu: menuMgr.menu,
  };

  const getCodeHandler = async () => {
    setEmptyDishes(false);
    setServerErr(false);
    let empty;
    menuMgr.menu.forEach((obj) => {
      if (obj.dishes.length <= 0) {
        empty = true;
      }
    });

    if (empty) {
      return setEmptyDishes(true);
    }
    await axios
      .post("/api/new", configMenu)
      .then((serverRes) => {
        setUrl(serverRes.data.message);

        setServerErr(false);
        dispatch({ type: "CODE" });
      })
      .catch((err) => {
        setServerErr(true);
      });
  };

  return (
    <div className="'height-auto  flex flex-col">
      <ol className="bg-slate-200 sm:ml-[2.5%] sm:mt-10 sm:w-[95%] rounded-2xl p-5">
        <p className={"text-2xl py-2"}>ALMOST DONE:</p>
        <li className={"text-lg"}>1. Enter one dish/meal at a time</li>
        <li className={"text-lg"}>
          2. When you're done with all entries, get your QR Code
        </li>
        <li className={"text-lg"}>3. Don't forget to print it!</li>
      </ol>
      {menuMgr.menu.map((obj, index) => {
        return (
          <DishForm
            key={`FORM_CAT_${index}`}
            obj={obj}
            emptyDishes={emptyDishes}
            setEmptyDishes={setEmptyDishes}
          />
        );
      })}

      {serverErr && (
        <p className={forms.feedback}>
          Oops, something went wrong. Try getting code again!
        </p>
      )}

      <button onClick={getCodeHandler} className={forms.codeBtn}>
        Get Code
      </button>
    </div>
  );
};

export default ApiForm;
