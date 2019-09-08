import './component.css'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Bullseye, Button } from '@patternfly/react-core';

import GoogleMaps from '../google-maps/component'

const useStyles = makeStyles(theme => ({
  card: {
    'margin-bottom': '1rem',
    'max-width': '40rem'
  },
  media: {
    height: '25rem',
    width: '40rem',
    display: 'table-cell',
    'background-size': 'cover'
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
  avatar: {
    backgroundColor: red[500],
  }
}));

export default ({
  user,
  isUserLoggedIn,
  organization,
  addSubscription
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  console.log('organization', organization);
  return (
    <Bullseye>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={organization.Avatar}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <a href={'https://'+organization.Website} target="_blank" >{organization.Name} </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {organization.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          className={'read-link-button'}
          isDisabled={!isUserLoggedIn} 
          variant="danger"
          onClick={() => {
              organization.Subscriptions.filter(s => s.UserId === user.Id).length === 0 
              && addSubscription.execute({organisationId: organization.Id, userId: user.Id})
            }}
          >
            {organization.Subscriptions.length}{' Subscriptions'}
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className='typography-centered' gutterBottom variant="h5" component="h2">
            {organization.SocialIssue}
          </Typography>
          <Typography className='maps' paragraph>
            <GoogleMaps location={organization.Location} />
          </Typography>
          <Typography className='typography-centered' variant="body2" color="textSecondary" component="p">
            {organization.Email}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Bullseye>
  );
}