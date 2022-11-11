import React, { useState } from "react";
import metaLogo from "../assets/meta-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "../data";
import { Link } from "react-router-dom";
import Wallet from "./Wallet";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
 
  return (
    <>
      <header>
        <div className="meta-header">
          <Link to="/">
            <img src={metaLogo} alt="meta logo" className="meta-logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShowSidebar(true)}>
            <FaBars />
          </button>
        </div>
        <nav className={`${showSidebar ? "show-nav" : ""}`}>
          <div className="nav-container">
            <button className="close-nav" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
            {navigation.map((nav, index) => {
              const { text, link } = nav;
              return (
                <Link to={link} key={index} >
                  {text}
                </Link>
              );
            })}
            <button className="wallet-btn" onClick={() => {
              setShowModal(true)
              setShowSidebar(false)
            }}>Connect wallet</button>
          </div>
        </nav>
        <div className="desktop-nav">
          {navigation.map((nav, index) => {
            const { text, link } = nav;
            return (
              <div key={index} >
                <Link to={link} >
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
          <button className="wallet-btn-desktop" onClick={()=> setShowModal(true)}>Connect wallet</button>
      </header>
      {showModal && <Wallet setShowModal={setShowModal}/>}
    </>
  );
};

export default Sidebar;
