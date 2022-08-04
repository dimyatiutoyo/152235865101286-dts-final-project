import { useState, useEffect } from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { alpha, Backdrop, CircularProgress, InputBase, ListItemIcon } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import CookieTwoToneIcon from '@mui/icons-material/CookieTwoTone';
import { VerifiedUser } from '@mui/icons-material';

const pages = [
  // { title: 'Resep', to: '/resep' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  marginRight: 10,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  color: 'grey',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (event) => {
    let searchString = event.target.value;
    if (searchString.length > 0) {
      if (event.key === 'Enter') {
        navigate('/cari/' + searchString)
      }
    } else {
      return;
    }
  }

  const handleLogout = async () => {
    setLoading(true);
    try {
      setAnchorElUser(null);
      setTimeout(async () => {
        localStorage.removeItem('user');
        setUser(null);
        await signOut(auth);
        navigate('/');
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getUser = async () => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(userLocalStorage);
  }

  useEffect(() => {
    getUser();
  }, [])


  return (
    <AppBar position="static" sx={{
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 13px 27px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px',
    }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CookieTwoToneIcon sx={{ display: { xs: 'none', md: 'flex', color: 'black' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Masak Apa
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: 'black'
              }}
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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{
                    color: 'black'
                  }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>


          {/* Responseive  */}
          <CookieTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
          <Typography
            onClick={() => navigate('/')}
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Masak Apa
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <Button
                key={page.title}
                color="warning"
                onClick={handleCloseNavMenu}
                sx={{
                  textTransform: 'capitalize',
                  my: 2,
                  display: 'block',
                  color: 'black',
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {/* Responsive end */}


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cari resep..."
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={handleSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            {!user ?
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button variant='contained' color='warning' sx={{ textTransform: 'capitalize', borderRadius: '6px', backgroundColor: 'black' }}>Login</Button>
              </Link>
              :
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {loading ? <CircularProgress color="inherit" /> : <Avatar alt={user?.email} src={user?.photoURL} />}

                </IconButton>
              </Tooltip>
            }
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
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <VerifiedUser color='primary' />
                </ListItemIcon>
                <Typography textAlign="center" onClick={() => navigate('/profil')}>{user?.displayName ?? user?.email}</Typography>
              </MenuItem>
              <MenuItem onClick={() => { }}>
                <ListItemIcon>
                  <FavoriteIcon color='error' />
                </ListItemIcon>
                <Typography textAlign="center">Favorit</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center" color='error'>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;