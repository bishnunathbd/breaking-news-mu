import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const News = (props) => {
  const {title, description, urlToImage} = props.article;

  const [likeIcon, setLikeIcon] = useState('');

  // const handleLikeIcon = () => {
  //   // const color = likeIcon ? '' : 'primary';
  //   // setLikeIcon(color);
  //   // setLikeIcon(likeIcon ? '' : 'primary');
  // }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <ThumbUpAltIcon onClick={() => setLikeIcon(likeIcon ? '' : 'primary')} color={likeIcon}></ThumbUpAltIcon>
      </CardActions>
    </Card>
  );
};

export default News;