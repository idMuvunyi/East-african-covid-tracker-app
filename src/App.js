import React from "react";
import "./tailwind.css";
import Header from "./header";
import SubHeader from "./subHeader";
import FetchData from "./fetchData";

function App(props) {
  return (
    <>
      <Header />
      <SubHeader />
      <br />
      <FetchData />
    </>
  );
}

export default App;
