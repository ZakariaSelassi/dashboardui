import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import {dataNavbar} from '../../utils/dataNavbar'
import {useNavigate} from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
const useStyles = makeStyles((theme) => ({
  maindrawer:{
      height:'100vh',
      backgroundColor:'#111827',
      color:'white',
       '& .MuiDivider-root':{
            backgroundColor:'white',
        }

  }
}));

const drawerWidth = 240;

function Navbar(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className={classes.maindrawer}>
      <Toolbar />
      <Divider />
      <List>
      {dataNavbar.map((text, index) => (
          <ListItem button key={text.id} onClick={() => navigate(`${text.path}`)}>
            <ListItemIcon style={{color:'white'}}>
              {text.icon}
              </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          color:'black',
          backgroundColor: 'white',
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
          <Box  sx={{ display: { xs: 'none', sm:'flex'} , width:'100%', justifyContent:'space-between'  }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Box sx={{display:'flex'}}>
            <IconButton>
              <Tooltip title="Notifications" aria-label="Notifications">
              <Badge badgeContent={""}  variant="dot"  color="secondary">
                  <NotificationsIcon />
              </Badge>
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Contact" aria-label="Messages">
              <GroupIcon />
              </Tooltip>
            </IconButton>
        
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  
            </Box>
           

          </Box>
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

    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;