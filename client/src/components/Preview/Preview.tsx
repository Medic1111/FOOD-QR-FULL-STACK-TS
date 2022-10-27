import classes from "./Preview.module.css";
import React, { useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { UiAction } from "../../reducers/ui-red";

const Preview: React.FC<{ dispatch: React.Dispatch<UiAction> }> = ({
  dispatch,
}) => {
  const menuMgr = useContext(MenuCtx);

  return (
    <div className={classes.div}>
      <header className={classes.header}>
        <h2 className={classes.h2}>{menuMgr.genInput.resName}</h2>
      </header>
      <div className={classes.divContact}>
        <span className={classes.span}>{menuMgr.genInput.resNumber}</span>
        <span className={classes.span}>{menuMgr.genInput.resAddress}</span>
        <span className={classes.span}>{menuMgr.genInput.resHours}</span>
      </div>

      {menuMgr.menu.map((obj, index) => {
        return (
          <div key={`Preview2_${index}`}>
            <h3 key={`CAT_${index}`} className={classes.h3}>
              {obj.category}
            </h3>
            {obj.dishes.map((dish, index) => {
              return (
                <div key={`Preview2Dish_${index}`} className={classes.dishBox}>
                  <div className={classes.dishTxtBox}>
                    <p className={classes.dishName}>{dish.dish}</p>
                    <p className={classes.dishDescription}>
                      {dish.description}
                    </p>
                  </div>
                  <p className={classes.dishPrice}>{dish.price}</p>
                </div>
              );
            })}
          </div>
        );
      })}

      <button onClick={() => dispatch({ type: "MODAL" })}>Return</button>
    </div>
  );
};

export default Preview;
