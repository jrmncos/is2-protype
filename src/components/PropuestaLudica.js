import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home";
import SinglePagePDFViewer from './SinglePagePDFViewer';
import modelos from "../resources/modelos.pdf"
import scrum from "../resources/scrum.pdf"
import metricascrum from "../resources/metricascrum.xlsx"


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function PropuestaLudica({params}){
	const classes = useStyles();
	const caseStudy = {id: params.id}

	const renderSwitch = (params) => {
    console.log(params)
    console.log(params.id)
    switch(params.id){
      case "modelos":
        return (
					<>
						<Typography variant="h3" component="h2" gutterBottom>
      				Modelos de ciclo de vida
    				</Typography> 
						<Divider/>
						<Box m={1.5}/>
						<SinglePagePDFViewer pdf={modelos} height={'850'} scale={2}/>

						
					</>
				)
			case "scrum":
				return(
					<>
						<Typography variant="h3" component="h2" gutterBottom>
      				Scrum
    				</Typography> 
						<Divider/>
						<Box m={1.5}/>
						<SinglePagePDFViewer pdf={scrum} height={'850'} scale={2}/>

						<a href={metricascrum} download="metricascrum.xlsx"> Descarga las metricas aca.. </a>
					</>
				)
      default:
        return <Home/>
    }
  }
	
	return(
    <Container maxWidth="lg">
    <main>
      <Grid container justify="center" spacing={4} className={classes.mainGrid} m={4}>
        <Grid item xs={12}>
          {
            renderSwitch(caseStudy)
          }
        </Grid>
      </Grid>
    </main>
    </Container>
  )
}