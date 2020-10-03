
import React from 'react';
import Navigation from '../Nav';
function Header(props) {
  const { navItems = [], setCurrentNavItem, currentNavItem } = props;
  return (
    <header>
      <div className="flex-row">
        <h1>
          <a href="/">Sean Cone</a>
        </h1>
        <Navigation
          navItems={navItems}
          setCurrentNavItem={setCurrentNavItem}
          currentNavItem={currentNavItem}
        ></Navigation>
      </div>
    </header>
  );
}
export default Header;