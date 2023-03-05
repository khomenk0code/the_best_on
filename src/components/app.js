import React from "react";
import {Routes, Route} from "react-router";
import {MainPage} from "../pages/main/main.page";
import {GlobalStyle} from "../global-style";
import {TarrifDomashnii} from "../pages/tariffs/tarrif.domashnii";
import Contacts from "../pages/contacts/contacts";
import ModalProvider from "./modal/modal-provider";
import Modal from "./modal/modal";

const App = () => {
    return (
        <ModalProvider>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/tariffs/domashnii" element={<TarrifDomashnii/>}/>
            </Routes>
            <Modal/>
        </ModalProvider>
    );

}

export default App;
