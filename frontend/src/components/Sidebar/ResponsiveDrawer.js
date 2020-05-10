import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import FlagIcon from '@material-ui/icons/Flag';
import PaymentIcon from '@material-ui/icons/Payment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import {Col,Image,Button} from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Formfield from '../Formfield';
import oil from '../../images/oil.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../style.css'
import GridField from '../GridField';
import ProfileIcon from '../ProfileIcon';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Col xs={6} md={4}>
        {/* <ProfileIcon style={{width:'70%'}}/> */}
        <Image class="center" src={oil} alt="Profile Image" style={{width:'150%',borderRadius:'50%',margin:'30px',marginTop:'0'}}/>

      </Col>
      <b style={{margin:'60px'}}>Shabeer Majeed</b><br/>
      <small style={{margin:'60px'}}><b>Cocoon ID:</b>24FD43</small>
      <Divider />
      <List>
        {['Payment'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><PaymentIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Issues'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><FlagIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['My Searches'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{variant:'light'}}>
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <GridField/>
        <List>
          <ListItem>
            <ButtonGroup className="mb-2">
              <Button variant="outline-dark">My Details</Button>
              <Button variant="outline-dark">Property Details</Button>
              <Button variant="outline-dark">Documents</Button>
            </ButtonGroup>
          </ListItem>
        </List>
      <Divider/>

        <div className="progress-bar">
          <ProgressBar striped variant="success" now={60} />
        </div>
        <Formfield/>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
