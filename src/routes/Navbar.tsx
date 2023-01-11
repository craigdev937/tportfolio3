import React from "react";
import "./Navbar.css";
import { FiX, FiMenu } from "react-icons/fi";

export const Navbar = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const handleClick = (): void => {
        setOpen(!open);
    };

    const closeMenu = (): void => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <a href="/" className="navbar__logo">
                    <h3>CraigDev937</h3>
                </a>
                <aside 
                    className="navbar__icon"
                    onClick={handleClick}
                    >{open ? <FiX /> : <FiMenu />}
                </aside>
                <ul className={
                    open ? "navbar__links active" : 
                    "navbar__links"}>
                        <li className="navbar__item">
                            <a 
                                href="#about" 
                                className="navbar__link"
                                onClick={closeMenu}
                                >About                                    
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#skills" 
                                className="navbar__link"
                                onClick={closeMenu}
                                >Skills                                    
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#portfolio" 
                                className="navbar__link"
                                onClick={closeMenu}
                                >Portfolio                           
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a 
                                href="#contact" 
                                className="navbar__link"
                                onClick={closeMenu}
                                >Contact                           
                            </a>
                        </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

