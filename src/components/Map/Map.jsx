import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = () => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const coordinates = {lat: 0, lang: 0};
  return (
      <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDfnVKMo403cqd-XQUypKdIQC3I0-ax6AU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        options={''}
        onChange={''}
        onChildClick={''}

      >
        
          </GoogleMapReact>
      </div>
  )
}

export default Map