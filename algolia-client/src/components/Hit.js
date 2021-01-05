// import React, { Component } from 'react';
// import { Highlight } from 'react-instantsearch-dom';
// import PropTypes from 'prop-types';

// export default class Hit extends Component {
//   render() {
//     const { hit } = this.props;
//     const { logo, objectID, name } = hit;
//     const image = logo && logo[0] && logo[0].downloadURL;
//     return (
//       <div>
//         <img src={image} align="left" alt={name} />
//         <div className="hit-name">
//           <Highlight attribute="name" hit={hit} />
//         </div>
//         <div className="hit-description">
//           <Highlight attribute="description" hit={hit} />
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Hit(props) {
  const classes = useStyles();

  const { hit } = props;
  const { logo, objectID, name, description, website } = hit;
  const image = logo && logo[0] && logo[0].downloadURL;

  return (
    <Card className={classes.root}>
      <CardHeader title={<Highlight attribute="name" hit={hit} />} />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom component="h2"></Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Meer informatie
        </Button>
        <Button size="small" color="primary" href={website} target="_blank">
          Website
        </Button>
      </CardActions>
    </Card>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
