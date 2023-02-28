import React from "react";
import {Routes, Route} from "react-router";
import {MainPage} from "../pages/main/main.page";
import {GlobalStyle} from "../global-style";
import {TariffsPage} from "../pages/tariffs/tariffs.page";


const App = () => {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/tariffs" element={<TariffsPage/>}/>
            </Routes>
        </div>
    );

}

export default App;
