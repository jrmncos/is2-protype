import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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


export default function Loader({nivel, setLoadSimulation, setRenderResults}){
  const classes = useStyles();
  const [progress, setProgress] = useState(1);
  const [onProgress, setOnProgress] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      if(onProgress){
        for(var i=0; i<nivel.eventos.length;i++){
          var num=Math.random();      
          if(progress > 7 && !nivel.eventos[i].acontecio && num < nivel.eventos[i].proba){
            nivel.eventos[i].acontecio = true;
            setOnProgress(!onProgress)
          }
        }
        if(progress >= nivel.semanas){
          setLoadSimulation(false)
          setRenderResults(true)
        }
        else{
          setProgress(progress+1)
        }
      }
      
    }, 5000/(nivel.semanas));
    return () => {
      clearInterval(timer);
    };
  }, [setLoadSimulation, setRenderResults, progress, nivel, onProgress]);

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
        <LinearProgress />
        <h1>Semana: {progress}</h1>
      </div>
      
    </>
  )
}

