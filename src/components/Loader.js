import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: "absolute",
    left: "48%",
    transform: "translate(-50%, -50%)"
  },
}));


export default function Loader({setLoadSimulation, cantSemanas}){
  const classes = useStyles();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= cantSemanas ? setLoadSimulation(false): prevProgress + 1));
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, [setLoadSimulation, cantSemanas]);

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
      <Box m={2}/>

      <div className={classes.root}>
        <LinearProgress />
        <h1>Semana: {progress}</h1>
      </div>
      

    </>
  )
}