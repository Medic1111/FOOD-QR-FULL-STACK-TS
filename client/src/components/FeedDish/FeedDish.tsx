import { CatInfo, DishInfo } from "../../models/dataType";
import { useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { forms } from "../../styles/forms";

const FeedDish: React.FC<{ objRet: DishInfo; obj: CatInfo }> = ({
  objRet,
  obj,
}) => {
  const menuMgr = useContext(MenuCtx);

  const removeDish = () => {
    let dish = objRet;
    let cat = obj;

    let catTofind = menuMgr.menu.find((category) => {
      return category === cat;
    });
    let dishToFilter = catTofind!.dishes.filter((specDish) => {
      return specDish !== dish;
    });

    return menuMgr.setMenu((prev) => {
      catTofind!.dishes = dishToFilter;
      return [...prev];
    });
  };

  return (
    <span onClick={removeDish} className={forms.feedback}>
      x {objRet.dish}
    </span>
  );
};

export default FeedDish;
