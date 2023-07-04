import React, { useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { UiAction } from "../../reducers/ui-red";
import { menu } from "../../styles/menu";

const Preview: React.FC<{ dispatch: React.Dispatch<UiAction> }> = ({
  dispatch,
}) => {
  const menuMgr = useContext(MenuCtx);

  return (
    <div onClick={() => dispatch({ type: "MODAL" })} className={menu.container}>
      <p className={`${menu.return} m-5`}>click anywhere to exit</p>
      <header className={menu.header}>
        <h2 className={menu.h2}>{menuMgr.genInput.resName}</h2>
      </header>
      <div className={menu.contactBox}>
        <span className={menu.span}>{menuMgr.genInput.resNumber}</span>
        <span className={menu.span}>{menuMgr.genInput.resAddress}</span>
        <span className={menu.span}>{menuMgr.genInput.resHours}</span>
      </div>

      {menuMgr.menu.map((obj, index) => {
        return (
          <div key={`Preview2_${index}`}>
            <h3 key={`CAT_${index}`} className={menu.h3}>
              {obj.category}
            </h3>
            {obj.dishes.map((dish, index) => {
              return (
                <div key={`Preview2Dish_${index}`} className={menu.dishBox}>
                  <div className={menu.dishTxtBox}>
                    <p className={menu.dishName}>{dish.dish}</p>
                    <p className={menu.dishDes}>{dish.description}</p>
                  </div>
                  <p className={menu.dishPrice}>{dish.price}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
