import classes from "../Modal/Modal.module.css";
import React, { useContext, useState } from "react";
import DishForm from "../DishForm/DishForm";
import axios from "axios";
import { MenuCtx } from "../../store/menu-ctx";
import { UiAction } from "../../reducers/ui-red";

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<UiAction>;
}

const ApiForm: React.FC<Props> = ({ setUrl, dispatch }) => {
  const menuMgr = useContext(MenuCtx);
  const [serverErr, setServerErr] = useState(false);

  const configMenu = {
    resName: menuMgr.genInput.resName,
    resAddress: menuMgr.genInput.resAddress,
    resNumber: menuMgr.genInput.resNumber,
    resHours: menuMgr.genInput.resHours,
    menu: menuMgr.menu,
  };

  const getCodeHandler = async () => {
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
    <React.Fragment>
      {menuMgr.menu.map((obj, index) => {
        return <DishForm key={`FORM_CAT_${index}`} obj={obj} />;
      })}
      {serverErr && (
        <p className={classes.feedback}>
          Oops, something went wrong. Try getting code again!
        </p>
      )}
      <button onClick={getCodeHandler} className={classes.btn}>
        Get Code
      </button>
    </React.Fragment>
  );
};

export default ApiForm;
