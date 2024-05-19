import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';
import { useContext, useState } from 'react';
import EntitiesContext from './ContextComponent.jsx';
import { AccountCircle } from '@mui/icons-material';

function AppNavbar() {
    const { currentUsername, logout } = useContext(EntitiesContext);
    // console.log('AppNavbar username: ', currentUsername);
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkStyle = {
        color: 'purple',
        textDecoration: 'none',
        backgroundColor: 'lightblue',
    };
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: 'secondary.main',
                }}
            >
                {/*    <Container maxWidth="xl">*/}
                <Toolbar>
                    <Box sx={{ display: { md: 'flex' } }}>
                        <MovieFilterRoundedIcon
                            sx={{
                                color: 'secondary',
                                fontSize: 40,
                                marginRight: 2,
                                alignSelf: 'center',
                            }}
                            onClick={() => navigate('/movies')}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: '#7e25ae',
                                textDecoration: 'none',
                                alignSelf: 'center',
                            }}
                        >
                            Disney Movies
                        </Typography>
                        <Dropdown>
                            <MenuButton>MOVIES</MenuButton>
                            <Menu>
                                <MenuItem
                                    onClick={() => navigate('/movies')}
                                    data-testid="movies-link"
                                    sx={{
                                        marginTop: 3,
                                    }}
                                >
                                    All Movies
                                </MenuItem>
                                <MenuItem
                                    onClick={() => navigate('/movies/add')}
                                    data-testid="add-movie-link"
                                >
                                    Add Movie
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/movies/chart');
                                        handleClose();
                                    }}
                                >
                                    Chart Movies
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate('/movies/generate');
                                        handleClose();
                                    }}
                                >
                                    Generate Movies
                                </MenuItem>
                            </Menu>
                        </Dropdown>
                        <Dropdown>
                            <MenuButton>CHARACTERS</MenuButton>
                            <Menu>
                                <MenuItem
                                    onClick={() => navigate('/characters')}
                                    data-testid="characters-link"
                                    sx={{
                                        marginTop: 3,
                                    }}
                                >
                                    All Characters
                                </MenuItem>
                                <MenuItem
                                    onClick={() => navigate('/characters/add')}
                                    data-testid="characters-link"
                                >
                                    Add Characters
                                </MenuItem>
                            </Menu>
                        </Dropdown>
                    </Box>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            {currentUsername && <AccountCircle />}
                            <MenuButton>{currentUsername}</MenuButton>
                            <Menu>
                                <MenuItem
                                    onClick={() => {
                                        logout();
                                        navigate('/');
                                    }}
                                    data-testid="right-dropdown-link-1"
                                    sx={{
                                        marginTop: 3,
                                    }}
                                >
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Dropdown>
                    </Box>
                </Toolbar>
                {/*    </Container>*/}
            </AppBar>
        </>
    );
}

export default AppNavbar;

const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `

  font-weight: 600;
  padding: 0px 30px;
  border-radius: 8px;
  color: white;
  
  height: 40px;
  overflow: hidden;
  margin: auto;
  
  background: transparent;
  transition: all 150ms ease;
  cursor: pointer;
 
  border: 0px solid;
  &:hover {
    background: ${theme.palette.mode === 'dark' ? blue[800] : blue[400]};

  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
);

const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
  list-style: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: default;
  // user-select: none;
  background-color: ${blue[200]};

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[300]};
    background-color: ${grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `,
);

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E6',
    700: '#0059B3',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
