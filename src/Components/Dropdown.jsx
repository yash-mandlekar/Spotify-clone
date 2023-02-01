import React, { useEffect, useState } from "react";
import { TbChevronDown } from "react-icons/tb";
import Div from "../MiniComp/Div";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleMenu();
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target.tagName === "svg") return;
      setShowMenu(false);
    };
    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <Div className="dropdown-container">
      <Div className="selected-option" onClick={toggleMenu}>
        <TbChevronDown />
      </Div>
      {showMenu ? (
        <ul className="options">
          <li onClick={() => handleOptionSelect("Private Section")}>
            Private Section
          </li>
          <li onClick={() => handleOptionSelect("Account")}>Account</li>
          <li onClick={() => handleOptionSelect("Settings")}>Settings</li>
          <li onClick={() => handleOptionSelect("Logout")}>Logout</li>
        </ul>
      ) : null}
    </Div>
  );
};

export default Dropdown;
