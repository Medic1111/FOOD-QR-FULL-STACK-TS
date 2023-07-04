import React from "react";
import ReactDOM from "react-dom";
const root = document.getElementById("portal") as HTMLElement;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className={"z-10 h-full w-full bg-slate-50 fixed overflow-auto"}>
      {children}
    </article>
  );
};

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Wrapper>{children}</Wrapper>, root)}
    </React.Fragment>
  );
};

export default Portal;
