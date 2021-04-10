import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'wouter'


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
/*
const sections = [
  { 
    title: 'Casos de estudio',
    url: '#',
    subPages: ["FLV", "Cisco", "Social Dilemma", "Indie Games", "Great Hack"]
  },
  { 
    title: 'Juegos',
    url: '#',
    subPages:[]
  },
  { 
    title: 'Metricas', 
    url: '#',
    subPages: []
  },
  { 
    title: 'Metricas', 
    url: '#',
    subPages: []
  },
];

*/

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
  const [anchorCase, setAnchorCase] = useState(false)

  const handleMenuCase = (event) => {
    setAnchorCase(event.currentTarget)
  }

  const handleCloseMenuCase = () => {
    setAnchorCase(null)
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Contacto</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Registrarse
        </Button>
      </Toolbar>

      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Typography
          onClick={handleMenuCase}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          Casos de estudio
        </Typography>
        <Menu
          anchorEl={anchorCase}
          open={Boolean(anchorCase)}
          onClose = {handleCloseMenuCase}
        >
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/fvl"}>
                FLV
              </Link>
            </MenuItem> 
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/cisco"}>
                Cisco
              </Link>
            </MenuItem> 
        </Menu>

        <Typography
          onClick={handleMenuCase}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          Simulacion
        </Typography>

        <Typography
          onClick={handleMenuCase}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          Punto 5
        </Typography>

        <Typography
          onClick={handleMenuCase}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          Punto 6
        </Typography>

        <Typography
          onClick={handleMenuCase}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          Casos de estudio
        </Typography>
        
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
