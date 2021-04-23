import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, Divider,} from "@material-ui/core";
import { Link } from "wouter";

export default function NavArticles({prev, next}){

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return(
    <>
      <Divider/>
      <Box m={1}/>
      <Typography variant="h6" gutterBottom>Seguir leyendo...</Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        { prev &&
          <Grid item >
            <Button startIcon = {<ArrowBackIosIcon/>} >
              <Link to={prev.url} onClick={scrollTop}>
                <Typography variant="subtitle1" color="primary">
                    {prev.title}
                </Typography>
              </Link>
            </Button>
          </Grid>
        }
        { next &&
          <Grid item >
            <Button endIcon = {<ArrowForwardIcon/>}  >
              <Link to={next.url} onClick={scrollTop}>
                <Typography variant="subtitle1" color="primary">
                    {next.title}
                </Typography>
              </Link>
            </Button>
          </Grid>
        }
      </Grid>

    </>
  )
}