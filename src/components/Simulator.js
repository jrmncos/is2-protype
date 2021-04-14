import { CardHeader, Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Programmer from "./Programmer";
import { Box } from '@material-ui/core';

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
});

export default function Simulator() {
  const classes = useStyles();
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
          <Card className={classes.root}>
            <Box m={2} />
            <CardHeader
              title={
                <Typography variant="h6" component="h2">
                    Miembros del Equipo
                </Typography>
              }
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              {Array(10).fill().map(() => {
                return(
                <Grid item xs={1}>
                  <Programmer/>
                </Grid>)
              })}
            </Grid>
            <CardActionArea>
              {/*<CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/755/0*p0h6jj_m4UGMtSYA.png"
                title="Edificación FVL"
              />*/}
              <CardContent>
              <FormControlLabel
                value="dailys"
                control={<Checkbox color="primary" />}
                label="Dailys"
                labelPlacement="start"
              />
              <br/>
              <FormControlLabel
                value="dailys"
                control={<Checkbox color="primary" />}
                label="Coaching"
                labelPlacement="start"
              />
              <br/>
              <FormControlLabel
                value="dailys"
                control={<Checkbox color="primary" />}
                label="Status review"
                labelPlacement="start"
              />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://miro.medium.com/max/755/0*p0h6jj_m4UGMtSYA.png"
                title="Edificación FVL"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Resultados de la simulacion
            </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  La moral del equipo estvo alta dado el expertiz que había para resolver las features..
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </>
  )
}