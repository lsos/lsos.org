import React, { ReactNode } from "react";
import { LsosLogo } from "../logo/LsosLogo";
import "./header.css";

export default Header;

function Header() {
  return (
    <Container>
      <a href="/">
        <LsosLogo size={1.9} />
      </a>
      <Menu>
        <MenuItem>
          <a href="/faq">
            <span className="text-desktop">FAQ</span>
            <span className="text-mobile">FAQ</span>
          </a>
        </MenuItem>
        <MenuItem id="header-signin">
          <a href="/account">
            <button
              type="button"
              className="lsos-button lsos-button--secondary"
            >
            {/*
              {telefuncContext.loggedUser
                ? telefuncContext.loggedUser.userEmail
                : "Sign In"}
            */}
                Sign In
            </button>
          </a>
        </MenuItem>
        <MenuItem id='getting-started-button'>
          <a href="/start">
            <button
              type="button"
              className="lsos-button"
              // style={{ fontWeight: 600 }}
            >
              Getting Started
            </button>
          </a>
        </MenuItem>
        {/*
        <MenuItem>
        </MenuItem>
        */}
      </Menu>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div id="header-container">
      <div id="header">{children}</div>
    </div>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return <div className="menu_container">{children}</div>;
}

function MenuItem({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div id={id} className="menu_item">
      {children}
    </div>
  );
}
