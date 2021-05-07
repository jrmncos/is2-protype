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
import { AppBar } from '@material-ui/core';


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
  const [anchorTutorial, setAnchorTutorial] = useState(false)
  const [anchorPapper, setAnchorPapper] = useState(false)

  const handleMenuCase = (event) => {
    setAnchorCase(event.currentTarget)
  }

  const handleMenuTutorial = (event) => {
    setAnchorTutorial(event.currentTarget)
  }

  const handleMenuPapper = (event) => {
    setAnchorPapper(event.currentTarget)
  }

  const handleCloseMenuCase = () => {
    setAnchorCase(null)
  }

  const handleCloseMenuTutorial = () => {
    setAnchorTutorial(null)
  }

  const handleCloseMenuPapper = () => {
    setAnchorPapper(null)
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

      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to={"/"} >
            <Button 
              onClick={handleMenuCase}
              color="inherit"
              noWrap
              variant="body2"
              style={{textTransform: 'none'}}
              className={classes.toolbarLink}
              >
                  Principal
            </Button>
          </Link>

          <Button 
            onClick={handleMenuCase}
            color="inherit"
            noWrap
            variant="body2"
            style={{textTransform: 'none'}}
            className={classes.toolbarLink}
            >
              Casos de estudio
          </Button>


          <Menu
            anchorEl={anchorCase}
            open={Boolean(anchorCase)}
            onClose = {handleCloseMenuCase}
          >
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/fvl"}>
                Fundación Valle de Lili
              </Link>
            </MenuItem> 
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/diamond"}>
                Hay diamantes en la mina de datos
              </Link>
            </MenuItem>
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/cisco"}>
                Cisco
              </Link>
            </MenuItem>
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/greathack"}>
                Great Hack
              </Link>
            </MenuItem>
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/indiegames"}>
                Indie Games
              </Link>
            </MenuItem>
            <MenuItem onClick = {handleCloseMenuCase}>
              <Link to={"/casestudy/socialdilemma"}>
                El dilema de las redes sociales
              </Link>
            </MenuItem>        
          </Menu>


          <Link to={"/simulation"} >
            <Button 
              size="small"
              color="inherit"
              noWrap
              variant="body2"
              style={{textTransform: 'none'}}
            >
              Simulación
            </Button>
          </Link>

          <Link to={"/developmentplan"} >
            <Button 
              size="small"
              color="inherit"
              noWrap
              variant="body2"
              style={{textTransform: 'none'}}
            >
              Plan de desarrollo
            </Button>
          </Link>
          
          <Button 
            onClick={handleMenuTutorial}
            color="inherit"
            noWrap
            variant="body2"
            style={{textTransform: 'none'}}
            className={classes.toolbarLink}
            >
              Tutoriales
          </Button>

          <Menu
            anchorEl={anchorTutorial}
            open={Boolean(anchorTutorial)}
            onClose = {handleCloseMenuTutorial}
          >
            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/atrapados"}>
                Atrapados
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/capitalism"}>
                Capitalismo de plataformas
              </Link>
            </MenuItem> 
            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/genero"}>
                Género en el contenido de la tecnología
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/certifications"}>
                Certificaciones
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/future"}>
                El Futuro de la Humanidad
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/tutorial/decolonial"}>
                Informática Decolonial
              </Link>
            </MenuItem>
          </Menu>

          <Button 
            onClick={handleMenuPapper}
            color="inherit"
            noWrap
            variant="body2"
            style={{textTransform: 'none'}}
            className={classes.toolbarLink}
            >
            Articulos Académicos
          </Button>

          <Menu
            anchorEl={anchorPapper}
            open={Boolean(anchorPapper)}
            onClose = {handleCloseMenuPapper}
          >
            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/emotionalintelligence"}>
                Emotional Intelligence
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/milennials"}>
                Milennials Project Managers
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/businessintelligence"}>
                Business Intelligence
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/collectivelearning"}>
                Collective Learning in Project Teams
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/multigenerational"}>
                Leading a Multigenerational Project Team
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/sustainable"}>
                Sustainable Wearables
              </Link>
            </MenuItem>

            <MenuItem onClick = {handleCloseMenuTutorial}>
              <Link to={"/papper/neurolinguistic"}>
                Neuro Linguistics Programming
              </Link>
            </MenuItem>       
          </Menu>



          <Link to={"/methodology"} >
            <Button 
              size="small"
              color="inherit"
              noWrap
              variant="body2"
              style={{textTransform: 'none'}}
            >
              Metodologías
            </Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
