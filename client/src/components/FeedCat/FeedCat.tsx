import { useContext } from "react";
import { MenuCtx } from "../../store/menu-ctx";
import { CatInfo } from "../../models/dataType";
import { forms } from "../../styles/forms";

const FeedCat: React.FC<{ obj: CatInfo }> = ({ obj }) => {
  const menuCtxManager = useContext(MenuCtx);

  const removeCat = () => {
    menuCtxManager.setMenu((prev) => {
      return menuCtxManager.menu.filter((objRet, index) => {
        return objRet.category !== obj.category;
      });
    });
  };

  return (
    <span onClick={removeCat} className={forms.badge}>
      x {obj.category}{" "}
    </span>
  );
};

export default FeedCat;
