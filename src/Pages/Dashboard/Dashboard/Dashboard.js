import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink, useRouteMatch, Switch, Route  } from 'react-router-dom';
import { Button } from '@mui/material';
import AddServices from '../AddServices/AddServices';
import DashboardHome from '../DashboardHome/DashboardHome';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageOrders from '../../AllOrder/ManageOrders/ManageOrders';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon> <HomeIcon/></ListItemIcon>
                <Link style={{color: "black", textDecoration: 'none'}} to ="/"><Button color="inherit">Home</Button></Link>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon> <DashboardIcon/></ListItemIcon>
                <Link style={{color: "black", textDecoration: 'none'}} to={`${url}`}><Button style={{color: "black"}} color="inherit">Dashboard</Button></Link><br/>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon> <DesignServicesIcon/></ListItemIcon>
                <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/addservices`}><Button color="inherit">Add Services</Button></Link>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon> <DesignServicesIcon/></ListItemIcon>
                <Link style={{color: "black", textDecoration: 'none'}} to={`${url}/manageorder`}><Button color="inherit">Manage Order</Button></Link>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon> <LogoutIcon/></ListItemIcon>
                {
                        user?.email ?
                            <Button style={{color: 'black'}} onClick={logout} color="inherit">Logout</Button>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
            </ListItem>
            <Divider />
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{backgroundColor: '#fbd062', color: 'black'}}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            DASHBOARD, Welcome to {user?.displayName} !
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          
            <Switch> 
                <Route exact path={path}>
                    <DashboardHome/>
                </Route> 
                <Route path={`${path}/addservices`}>
                    <AddServices/>
                </Route>       
                <Route path={`${path}/manageorder`}>
                    <ManageOrders/>
                </Route>       
            </Switch>
        </Box>
      </Box>
    );
  }
  
  Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Dashboard;