import { useState, useContext } from 'react';
import { userContext } from '../../components/Auth/Auth'
import { useNavigate  } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import styles from './ResponsiveAppBar.module.scss'

const pages = ['home', 'history'];
const settings = ['Logout'];

const ResponsiveAppBar = () => {
  let { user, signOut } = useContext(userContext)
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (ev, page) => {
    setAnchorElNav(null);
    if(page === "backdropClick") return;
    navigate(`/${page}`);
  };

  const handleCloseUserMenu = (ev, setting) => {
    setAnchorElUser(null);
    if (setting === "Logout") signOut();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopLogo />
          <MobilePages data={{handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages}} />
          <MobileLogo />
          <DesktopPages data={{handleCloseNavMenu, pages}}/>
          <UserData data={{ handleOpenUserMenu, anchorElUser, handleCloseUserMenu, settings, user }}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


// AUX Components ==============================================================
// =============================================================================

let DesktopLogo = () => (
  <>
    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  </>
);

let MobileLogo = () => (
  <>
    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  </>
);

let MobilePages = ({data}) => {
  let { handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages } = data;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={(ev) => handleCloseNavMenu(ev, page)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

let DesktopPages = ({data}) => {
  let { handleCloseNavMenu, pages } = data;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={(ev) => handleCloseNavMenu(ev, page)}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

let UserData = ({ data }) => {
  let { handleOpenUserMenu, anchorElUser, handleCloseUserMenu, settings, user } = data;
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <div className={styles.userIcon}>
              <p>{user.attributes.email[0].toUpperCase()}</p>
            </div>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={(ev) => handleCloseUserMenu(ev, setting)}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export default ResponsiveAppBar;