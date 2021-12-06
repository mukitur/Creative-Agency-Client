import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ContactsIcon from '@mui/icons-material/Contacts';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'black',
            textDecoration: 'none' 
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
          [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        }
        },
        navLogo: {
          [theme.breakpoints.down('sm')]: {
            textAlign: 'right'
        }
        },
        mobileNavItem: {
          textDecoration: 'none',
          color: "black"
        }

    })
    const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();

    //drawer add

    const [state, setState] = React.useState(false);
  
    const list = (
      <Box
        sx={{ width:250 }}
        role="presentation"
      >
        <List style={{marginTop: '30px', fontSize: '14px'}}>
          <ListItem button>
            <ListItemIcon> <HomeIcon/></ListItemIcon>
            <Link className={mobileNavItem} to ="/">Home</Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <PersonIcon/></ListItemIcon>
            <Link className={mobileNavItem} to ="/about">About</Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <PersonIcon/></ListItemIcon>
            <Link className={mobileNavItem} to ="/weoffer">We Offer</Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <HomeIcon/></ListItemIcon>
            <Link className={WorkspacesIcon} to ="/portfolio">Portfolio</Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon> <ContactsIcon/></ListItemIcon>
            <Link  className={mobileNavItem}to ="/contact">Contact</Link>
          </ListItem>
          <Divider />
         {/*  <ListItem button>
            <ListItemIcon> <ContactsIcon/></ListItemIcon>
            <Link  className={mobileNavItem}to ="/login">Login</Link>
          </ListItem> */}
          <ListItem button>
            <ListItemIcon> <ContactsIcon/></ListItemIcon>
            <Link  className={mobileNavItem}to ="/login">Login</Link>
            {
                        user?.email ?
                        <Box className={mobileNavItem}>
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink> 
                            <Button  onClick={logout} color="inherit">Logout</Button>
                        </Box>
                            :
                            <NavLink className={mobileNavItem} style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
          </ListItem>
          <Divider />
        </List>
      </Box>
    );

    return (
      <>
          <Box sx={{ flexGrow: 2 }}>
            <AppBar position="sticky" style={{backgroundColor: '#fbd062'}}>
              <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={navIcon}
                    onClick={()=>setState(true)}
                    sx={{ mr: 2 }}  
                  >
                  <MenuIcon/>
                </IconButton>
                <Typography style={{marginRight: '25px'}} className={navLogo} variant="h6" component="div" >
                  <Link className={navItem} to = "/">Creative Agency</Link>
                </Typography>
                <Box className = {navItemContainer}  sx={{ flexGrow: 1 }}>
                    <Link className={navItem} to = "/"><Button color="inherit">Home</Button></Link>
                    <Link className={navItem} to = "/about"><Button color="inherit">About</Button></Link>
                    <Link className={navItem} to = "/weoffer"><Button color="inherit">We Offer</Button></Link>
                    <Link className={navItem} to = "/portfolio"><Button color="inherit">Portfolio</Button></Link>
                    <Link className={navItem} to = "/contact"><Button color="inherit">Contact</Button></Link>
                    {
                        user?.email ?
                        <>
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink> 
                            <Button style={{color: 'black'}} onClick={logout} color="inherit">Logout</Button>
                        </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <div>
    
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      
    </div>
        </>  
      );
};

export default Navigation;