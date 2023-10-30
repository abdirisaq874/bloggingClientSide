'use client';
import React, { useEffect, useState } from 'react';
import { Navlinks, Themes } from './Arrays';

const NavLink = ({ NavLinks }) => {
  const [active, setActive] = useState(NavLinks[0].title);
  return NavLinks.map((item, index) => {
    return (
      <li key={index} onClick={() => setActive(item.title)}>
        <div className={`${item.title === active ? 'active' : ''} px-3 py-2`}>
          {item.title}
        </div>
      </li>
    );
  });
};

const Theme = () => {
  const [activeTheme, setActiveTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') || 'System'
      : 'System'
  );

  useEffect(() => {
    const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      if (activeTheme === 'System') {
        updateHtmlDataTheme(e.matches ? 'dark' : 'light');
      }
    };
    if (activeTheme === 'System') {
      handleSystemThemeChange(systemThemeQuery);
    } else {
      updateHtmlDataTheme(activeTheme.toLowerCase());
    }

    systemThemeQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [activeTheme]);

  const handleThemeClick = (theme) => {
    setActiveTheme(theme.title);
    updateHtmlDataTheme(theme.dataTheme);
    localStorage.setItem('theme', theme.title);
  };

  const updateHtmlDataTheme = (dataTheme) => {
    document.documentElement.setAttribute('data-theme', dataTheme);
  };

  return (
    <details>
      <summary>Theme</summary>
      <ul className="z-10">
        {Themes.map((theme, index) => {
          return (
            <li key={index} onClick={() => handleThemeClick(theme)}>
              <div className={`${theme.title === activeTheme ? 'active' : ''}`}>
                {theme.title}
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

const LanguageList = () => {
  const languageList = ['English', 'Turkish'];
  const [activeLanguage, setActiveLanguage] = useState('English');
  return (
    <details>
      <summary>Language</summary>
      <ul>
        {languageList.map((item, index) => {
          return (
            <li key={index} onClick={() => setActiveLanguage(item)}>
              <div className={`${item === activeLanguage ? 'active' : ''}`}>
                {item}
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

const Header = () => {
  return (
    <nav className="navbar  border-b border-base-300 sticky top-0 backdrop-blur-lg z-10">
      <div className="container mx-auto justify-between">
        {/* --------------------------------------LOGO----------------------------------------------------- */}
        <div className="flex gap-1 items-center">
          <div className="text-2xl text-primary">Orbiba</div>
          <div className="text-2xl text-secondary">Robotics</div>
        </div>

        {/* --------------------------------------Mobile Navigation---------------------------------------- */}
        <div className="flex basis-full justify-end md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="text-primary"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              <NavLink NavLinks={Navlinks} />
              {/* <div className="border-t border-base-300"></div> */}

              <li className="border-t border-base-300">
                <Theme />
              </li>
              <li>
                <LanguageList />
              </li>
            </ul>
          </div>
        </div>

        {/* --------------------------------------NAVBAR--------------------------------------------------- */}
        <div className="basis-full justify-end hidden md:flex">
          {/* --------------------------------------NAVLINKS------------------------------------------------ */}
          <ul className="menu menu-horizontal">
            <NavLink NavLinks={Navlinks} />
          </ul>
          {/* --------------------------------------THEME&LANGUAGE----------------------------------------- */}
          <ul className="menu menu-horizontal border-l border-base-300 p-0 place-items-center">
            {/* --------------------------------------THEME---------------------------------------------------- */}
            <li>
              <Theme />
            </li>
            {/* --------------------------------------LANGUAGE------------------------------------------------ */}
            <li>
              <LanguageList />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
