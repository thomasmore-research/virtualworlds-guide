import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Highlight } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { CardHeader, Chip, Collapse, IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: 2,
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function Hit(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { hit } = props;
  const { logo, objectID, name, description, website, features } = hit;
  const image = logo && logo[0] && logo[0].downloadURL;

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} ti tle={name} />
        <CardHeader title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <div className={classes.features}>
            {features.map(feature => (
              <Chip key={feature} label={feature} size="small" />
            ))}
          </div>
        </CardContent>
        <CardActions>
          {website && (
            <Button size="small" href={website} target="_blank">
              Website
            </Button>
          )}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Informatie</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};
