import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Iconbutton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function MovieList(data) {
  console.log(data)
  const classes = useStyles();
  return (
   <div className={classes.root}>
   <GridList cellHeight={180} className={classes.gridList}>
   <GridListTile key="Subheader" cols={2} style={{ height: 'auto'}}>
     <ListSubheader component="div">Movies</ListSubheader>
   </GridListTile>
   {data.data.length <= 0  ? <GridListTile>No Movies </GridListTile> : data.data.map((dat) => (
   <GridListTile key={dat.thumb}>
   <img src={dat.thumb} alt={dat.title}/>
   <GridListTileBar
   title={dat.title}
   subtitle={<span> rating: {dat.rating}</span>}
   actionIcon={
     <Iconbutton aria-label={`move duration is ${dat.duration} minutes`} className={classes.icon}>
     <InfoIcon />
     </Iconbutton>
   }
   />
   </GridListTile>
 ))}
 </GridList>
   </div>
 );
}
