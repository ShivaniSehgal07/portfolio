import React, { useState } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '../../routing/routes';
import localisedStrings from '../../assets/lib/localisations';
import './Drawer.css';

const drawerBleeding = 26;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function Drawer(props) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {

    setOpen(newOpen);
  };

  const container = document.getElementById('root');

  const renderLinks = () => (
    <div className="drawer-menu-items-wrapper">
      {Object.keys(routes).map((route) => (
        <div key={routes[route]} className="drawer-menu-items">
          <Link
            onClick={toggleDrawer(false)}
            to={routes[route]}
            className={location.pathname === routes[route] ? "selected color-cream" : "color-cream"}
          >
            {localisedStrings[route]}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="drawer">
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(38% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.error', backgroundColor: "crimson" }}>
            {renderLinks()}
          </Typography>
        </StyledBox>
      </SwipeableDrawer>
    </div>
  );
}

export default Drawer;
