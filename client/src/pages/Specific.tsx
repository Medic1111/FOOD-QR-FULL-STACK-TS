import { menu } from "../styles/menu";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFound from "../components/NotFound/NotFound";
import { ResponseData } from "../models/dataType";

const Specific: React.FC = () => {
  const urlId = useParams().id;
  const [notFound, setNotFound] = useState(false);
  const [info, setInfo] = useState<ResponseData>({
    resName: "",
    resNumber: "",
    resAddress: "",
    resHours: "",
    menu: [],
  });

  const fetchApi = () => {
    axios
      .get(`/api/restaurants/${urlId}`)
      .then((serverRes) => {
        setInfo(serverRes.data);
        setNotFound(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setNotFound(true);
        }
      });
  };

  useEffect(fetchApi, []);

  if (notFound === false) {
    return (
      <div className={menu.container}>
        <header className={menu.header}>
          <h2 className={menu.h2}>{info.resName}</h2>
        </header>
        <div className={menu.contactBox}>
          <span className={menu.span}>{info.resNumber}</span>
          <span className={menu.span}>{info.resAddress}</span>
          <span className={menu.span}>{info.resHours}</span>
        </div>
        {info.menu.map((obj) => {
          return (
            <React.Fragment>
              <h3 className={menu.h3}>{obj.category}</h3>
              {obj.dishes.map((dishInput) => {
                return (
                  <div className={menu.dishBox}>
                    <div className={menu.dishTxtBox}>
                      <p className={menu.dishName}>{dishInput.dish}</p>
                      <p className={menu.dishDes}>{dishInput.description}</p>
                    </div>
                    <p className={menu.dishPrice}>{dishInput.price}</p>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Specific;
