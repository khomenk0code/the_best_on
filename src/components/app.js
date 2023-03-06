import React from "react";
import {Routes, Route} from "react-router";
import {MainPage} from "../pages/main/main.page";
import {GlobalStyle} from "../global-style";
import {Domashnii} from "../pages/tariffs/domashnii";
import Contacts from "../pages/contacts/contacts";
import ModalProvider from "./modal/modal-provider";
import Modal from "./modal/modal";
import {Bazovii} from "../pages/tariffs/bazovii";
import {DlyaBiznesa} from "../pages/tariffs/dlya-biznesa";
import {Bezlim} from "../pages/tariffs/bezlim";

const App = () => {
    return (
        <ModalProvider>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/tariffs/domashnii" element={<Domashnii/>}/>
                <Route path="/tariffs/bazovii" element={<Bazovii/>}/>
                <Route path="/tariffs/dlya-biznesa" element={<DlyaBiznesa/>}/>
                <Route path="/tariffs/bezlim" element={<Bezlim/>}/>
            </Routes>
            <Modal/>
        </ModalProvider>
    );

}

export default App;
