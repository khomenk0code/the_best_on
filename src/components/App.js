import React from "react";
import {Routes, Route} from "react-router";
import {MainPage} from "./pages/MainPage";
import {GlobalStyle} from "./GlobalStyle";

const App = () => {
  return (
      <div>
          <GlobalStyle/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </div>
  );

}

export default App;
