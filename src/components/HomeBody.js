import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FeaturedPost from './FeaturedPost';


export default function HomeBody(props) {
  //const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />

      {posts.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))}
    </Grid>
  );
}

HomeBody.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
