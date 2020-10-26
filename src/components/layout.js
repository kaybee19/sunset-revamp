import React, { Fragment, useEffect, useState } from "react";
import { Link } from "gatsby";
// import Loader from "./loader"

// Home
import SunsetIntro from "./sunsetIntro";
import SunsetFooter from "./Footer";

//About

//Contact

const Layout = props => {
  const { title, children, page } = props;
  const [toggleNav, setToggleNav] = useState(false);

  const homeMarkup = (
    <Fragment>
      <SunsetIntro />
    </Fragment>
    );

  const footerMarkup = toggleNav ? null : <SunsetFooter />

  const bgNav = () => {

    const bgHome = document.getElementById("heroCont");

    if (page === 'home') {
      if (!toggleNav) { 
        bgHome.classList.add('heroFix');
      } else {
        bgHome.classList.remove('heroFix');
      }
    }
  }

  useEffect(() => {
    const titleHome = document.getElementById("titleHome");

    if (page === 'home') {
      titleHome.classList.add('hideTitle');
    };
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#"
            onClick={() => {
              setToggleNav(!toggleNav);
              bgNav();
            }}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li role="menuitem">
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>

          <div id="titleHome" className="site-head-center">
            <div className="titleFont site-head-logo">
              {title}
            </div>
          </div>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com/sunsetdriveng/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sunsetdriveng/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/sunsetdriveng"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </header>

      {(page === 'home') && homeMarkup}


      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        {footerMarkup}
        &copy; {new Date().getFullYear()} {title} Entertainment Services
      </footer>
    </div>
  )
}

export default Layout
