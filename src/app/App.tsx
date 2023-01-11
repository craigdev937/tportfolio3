import React from "react";
import "./App.css";
import { About } from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Portfolio } from "../components/portfolio/Portfolio";
import { Contact } from "../components/contact/Contact";
import { Navbar } from "../routes/Navbar";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Navbar />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </React.Fragment>
    );
};


