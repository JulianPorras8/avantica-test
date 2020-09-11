// prettier-ignore
import {
  AppBar, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem,
  ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { Route, Router } from 'react-router-dom';

import { history } from './configureStore';
import { IssuesPage } from './pages';
import { withRoot } from './withRoot';

function Routes() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Route exact={true} path='/' component={IssuesPage} />
      <Route exact={true} path='/issues' component={IssuesPage} />
    </div>
  );
}

function Drawer() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/issues')}>
          <ListItemIcon>
            <FormatListNumberedIcon />
          </ListItemIcon>
          <ListItemText primary='Issues' />
        </ListItem>
      </List>
    </div>
  );
}

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(true);
  // const todoList = useSelector((state: RootState) => state.todoList);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                color='inherit'
                noWrap={isMobile}
              >
                Avantica - Github Issues
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <DrawerMui
              variant='temporary'
              anchor={'left'}
              open={mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Drawer />
            </DrawerMui>
          </Hidden>
          <Hidden smDown>
            <DrawerMui
              variant='permanent'
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Drawer />
            </DrawerMui>
          </Hidden>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: { ...theme.mixins.toolbar },
  drawerPaper: {
    width: 250,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
}));

export default withRoot(App);
