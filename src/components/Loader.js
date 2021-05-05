import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: "center",
    marginLeft: "170px",
  },
}));

let eventoXAcontecio = new Map()

export default function Loader({nivel, setLoadSimulation, setRenderResults}){
  const classes = useStyles();
  const [week, setWeek] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [paused, setPaused] = React.useState(false)

  const handleClose = () => {
    setOpen(false);
    setPaused(false)
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      //Chequeo si se disparo algun evento
      if(!paused){
        nivel.eventos.forEach((evento) => {
          var num=Math.random();
          //El evento solo ocurre una vez
          if(week > 7 && eventoXAcontecio.get(evento.id) == null && num < evento.proba){
            console.log(eventoXAcontecio.set(evento.id, true))
            setOpen(true)
            setPaused(true)
          }
        })
        if(week >= nivel.semanas){
          setLoadSimulation(false)
          setRenderResults(true)
          eventoXAcontecio.clear()
        }
        else{
          setWeek(week+1)
        }
      }  
    }, 5000/(nivel.semanas));
    return () => {
      clearInterval(timer);
    };
  }, [setLoadSimulation, setRenderResults, week, nivel, paused]);

  return(
    <>
      <ContentLoader 
        speed={2}
        width={750}
        height={550}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="18" rx="2" ry="2" width="800" height="10" /> 
        <rect x="0" y="34" rx="2" ry="2" width="800" height="10" /> 
        <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
      </ContentLoader>

      <div className={classes.root}>
        <LinearProgress/>
        <h1>Semana: {week}</h1>
      </div>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      
    </>
  )
}

