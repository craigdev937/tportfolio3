import React from "react";
import "./App.css";
import Sunrise from "@public/sunrise.jpg";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <img 
                src={Sunrise} alt="Sunrise"
                height="600px" width="auto" 
            />
        </React.Fragment>
    );
};


