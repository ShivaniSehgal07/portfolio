import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import localisedStrings from '../../assets/lib/localisations';
import { routes } from '../../routing/routes';

import './Header.css';

function Header(props) {
  const [localization, setLocalization] = useState('en');
  const location = useLocation();

  const handleChangeLocalization = (event, newLang) => {
    localisedStrings.setLanguage(newLang);
    setLocalization(newLang);
  };

  const renderLanguageOptions = () => (
    <div className="menu-items">
      <ToggleButtonGroup
        value={localization}
        exclusive
        onChange={handleChangeLocalization}
        aria-label="localization"
      >
        <ToggleButton value="en" size="small" aria-label="en">
          En
        </ToggleButton>
        <ToggleButton value="fr" size="small" aria-label="fr">
          Fr
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );

  const renderLinks = () => (
    <>
      {Object.keys(routes).map((route) => (
        <div key={routes[route]} className="menu-items">
          <Link to={routes[route]} className={location.pathname === routes[route] ? "color-crimpson" : "color-grey"}>
            {localisedStrings[route]}
          </Link>
        </div>
      ))}
      {renderLanguageOptions()}
    </>
  );

  return (
    <div className="Header">
      <div className="logo">
        Portfo<span>lio</span>
      </div>
      <div className="menu">
        {renderLinks()}
      </div>
    </div>
  );
}

export default Header;
