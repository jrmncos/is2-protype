import { Button, CardHeader, Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Programmer from "./Programmer";
import { Box } from '@material-ui/core';
import Loader from "./Loader";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100%'
  },
  media: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  },
  titleTeam:{
    backgroundColor:'#d5c7de',
    height:'20px',
    width:'380px',
    textAlign: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  titleHoras:{
    backgroundColor:'#f6aa9e',
    height:'20px',
    width:'380px',
    textAlign: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  titleMeetings:{
    backgroundColor:'#f6ca9e',
    height:'20px',
    width:'380px',
    textAlign: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  titleEstimacion:{
    backgroundColor:'#b5d5f6',
    height:'20px',
    width:'380px',
    textAlign: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  titleResultados:{
    backgroundColor:'#b5d5f6',
    height:'20px',
    width:'98%',
    textAlign: "center",
    marginLeft: "1%",
  }
});

export default function Simulator() {
  const classes = useStyles();
  const [loadSimulation, setLoadSimulation] = useState(false)

  const handleComenzarSimulacion = () =>{
    setLoadSimulation(!loadSimulation)
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={4}>
          <Grid
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Card className={classes.root}>
                <Box m={2} />
                <CardHeader
                  className={classes.titleTeam}
                  title={
                    <Typography variant="h6" component="h2">
                      Miembros del Equipo
                    </Typography>
                  }
                />
                <CardActionArea>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      {Array(9).fill().map(() => {
                        return (
                          <Grid item xs={1.5}>
                            <Programmer />
                          </Grid>)
                      })}
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Box m={1}/>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <Box m={2} />
                  <CardHeader
                    className={classes.titleHoras}
                    title={
                      <Typography variant="h6" component="h2">
                        Horas Extras
                      </Typography>
                    }
                  />
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="dailys"
                            control={<Checkbox color="primary" />}
                            label="Permitir"
                            labelPlacement="start"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControlLabel
                            value="dailys"
                            control={<Checkbox color="primary" />}
                            label="Exigir"
                            labelPlacement="start"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Box m={1}/>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <Box m={2} />
                  <CardHeader
                    className={classes.titleMeetings}
                    title={
                      <Typography variant="h6" component="h2">
                        Meetings
                      </Typography>
                    }
                  />
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item >
                          <FormControlLabel
                            value="dailys"
                            control={<Checkbox color="primary" />}
                            label="Coaching"
                            labelPlacement="start"
                          />
                        </Grid>
                        <Grid item >
                          <FormControlLabel
                            value="dailys"
                            control={<Checkbox color="primary" />}
                            label="Dailys"
                            labelPlacement="start"
                          />
                        </Grid>
                        <Grid item >
                          <FormControlLabel
                            value="dailys"
                            control={<Checkbox color="primary" />}
                            label="Coaching"
                            labelPlacement="start"
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Box m={1}/>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <Box m={2} />
                  <CardHeader
                    className={classes.titleEstimacion}
                    title={
                      <Typography variant="h6" component="h2">
                        Presupuesto
                      </Typography>
                    }
                  />
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={6}>
                          <TextField
                            id="standard-read-only-input"
                            label="Disponible"
                            defaultValue="$25000"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="standard-read-only-input"
                            label="Total"
                            defaultValue="$24000"
                            InputProps={{
                              readOnly: true,
                              
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Box m={1}/>
              <Grid item xs={12}>
                <Card className={classes.root}>
                  <Box m={2} />
                  <CardHeader
                    className={classes.titleEstimacion}
                    title={
                      <Typography variant="h6" component="h2">
                        Semanas
                      </Typography>
                    }
                  />
                  <CardActionArea>
                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item xs={6}>
                          <TextField
                            id="standard-read-only-input"
                            label="Objetivo"
                            defaultValue="10"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="standard-read-only-input"
                            label="Estimado"
                            defaultValue="10"
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Box m={1.5}/>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  fullWidth style={{ borderRadius: 35, backgroundColor: "#2E3B55", color: "white"}}
                  onClick={handleComenzarSimulacion}
                >
                  Comenzar simulación
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Card className={classes.root}>
            <Box m={2}/>
            <CardHeader
              className={classes.titleResultados}
              title={
                <Typography variant="h6" component="h2">
                  Resultados de la simulación
                </Typography>
              }
            />
            <CardActionArea>
              <CardContent>
                {loadSimulation && <Loader/>}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </>
  )
}