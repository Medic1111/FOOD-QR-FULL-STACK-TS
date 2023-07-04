import React, { useReducer } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import uiReducer, { UiInitialState } from "../reducers/ui-red";
import QRCode from "../components/QRCode/QRCode";
import Preview from "../components/Preview/Preview";

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(uiReducer, UiInitialState);
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-col justify-start items-start h-screen w-screen bg-slate-100">
      <Header />
      {state.hero && <Hero dispatch={dispatch} />}
      {state.modal && <Modal dispatch={dispatch} setUrl={setUrl} />}
      {state.code && <QRCode url={url} />}
      {state.preview && <Preview dispatch={dispatch} />}
    </div>
  );
};

export default Home;
