import React, { Component } from 'react'
import {Link} from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DayJS from 'react-dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';


const styles = {
    card: {
        display: "flex",
        objectFt:"cover",
    },
    media: {
        minWidth:170,
    },

}

class Scream extends Component {
    render() {
        let { classes, screams: {
            body, userHandle, userImage, createdAt, likeCount, commentCount
        }} = this.props

        dayjs.extend(relativeTime);
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia image = {userImage} title="Profile Image" className={classes.media}></CardMedia>
                    <CardContent>
                    <Typography variant="h5" component={Link} to={`/user/${userHandle}`}>
                        {userHandle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                       {dayjs(createdAt).fromNow()}
                    </Typography>
                    <Typography variant="body1">
                        {body}
                    </Typography>
                    </CardContent>
                </Card>
                <br></br>
            </div>
        )
    }
}

export default withStyles(styles)(Scream);
