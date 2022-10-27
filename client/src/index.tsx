import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MenuCtxProvider from "./store/menu-ctx";
// import { DisplayProvider } from "./store/display-ctx";
// import { MenuCtxProvider } from "./store/menu-ctx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <MenuCtxProvider> */}
    {/* <DisplayProvider> */}
    <MenuCtxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuCtxProvider>
    {/* </DisplayProvider> */}
    {/* </MenuCtxProvider> */}
  </React.StrictMode>
);
