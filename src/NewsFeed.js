

import React from "react"


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
 
let feed=[{
    Author:"Ahmed Massoued",
    SocialMedia:"Facebook",
    Post:"Corona is over, we can smoke chicha again",
    Type:"Fake",
    Topic:"Corona",
    Reactions:896},
    {
    Author:"Mohamed Souibgui",
    SocialMedia:"Twitter",
    Post:"Spanish Prime Minister Pedro Sanchez told people to invest in Bitcoin during the pandemic",
    Type:"Fake",
    Topic:"Corona",
    Reactions:606},
    {
    Author:"Houssem Amiri",
    SocialMedia:"Facebook",
    Post:"There is evidence that chlorine dioxide cures COVID-19",
    Type:"Fake",
    Topic:"Corona",
    Reactions:5236},
    {
    Author:"houssem",
    SocialMedia:"Facebook",
    Post:"There is a protestation right now. more than 5000 person",
    Type:"Fake",
    Topic:"protestation",
    Reactions:789},
    {
        Author:"Khalil",
        SocialMedia:"Facebook",
        Post:"PDL is the winner of the election",
        Type:"Fake",
        Topic:"Politics",
        Reactions:2368},
        {
        Author:"Ahmed",
        SocialMedia:"Twiiter",
        Post:"Adidas is giving away face masks",
        Type:"Fake",
        Topic:"Corona",
        Reactions:236},
        {
        Author:"Mahmoud",
        SocialMedia:"Facebook",
        Post:"A doctor claims most Belgians are immune to COVID-19",
        Type:"Fake",
        Topic:"Corona",
        Reactions:589},
        {
        Author:"Sami",
        SocialMedia:"Facebook",
        Post:"Chloroquine is the cure for COVID-19 and masks should not be used",
        Type:"Fake",
        Topic:"Corona",
        Reactions:1498},
        {
            Author:"Ahmed",
            SocialMedia:"Facebook",
            Post:"Corona is fake",
            Type:"Not Fake",
            Topic:"Corona",
            Reactions:700},
            {
            Author:"Ahmed",
            SocialMedia:"Facebook",
            Post:"Corona is fake",
            Type:"Fake",
            Topic:"Corona",
            Reactions:700},
            {
            Author:"Ahmed",
            SocialMedia:"Facebook",
            Post:"Corona is fake",
            Type:"Fake",
            Topic:"Corona",
            Reactions:700},
            {
            Author:"Ahmed",
            SocialMedia:"Facebook",
            Post:"Corona is fake",
            Type:"Fake",
            Topic:"Corona",
            Reactions:700},
            ]



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '70ch',
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(0.9),
    },
    inline: {
      display: 'inline',
    },
  }));

  export default function AlignItemsList() {
    const classes = useStyles();


    let feedelements = feed.map(
        f=>{return(<><ListItem alignItems="flex-start" >        
                <ListItemAvatar>
                    <Avatar alt={f.Author} src="" />
                </ListItemAvatar>
                <ListItemText
                    primary={f.Post}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {f.Author} on {f.SocialMedia}
                        </Typography>
                        {" - "+f.Reactions+ " total reactions"}
                        </React.Fragment>
                    }
                    >
                    
                </ListItemText>
                <Chip
                    size="medium"
                    label={f.Type}
                    color={f.Type=="Fake"?"secondary":"primary"}
                    />
                <Chip
                    variant="outlined"
                    size="medium"
                    label="Corona"
                    color="primary"
                    />
            </ListItem>
            <Divider  /></>)
            })
    return(
        <List component="nav" className={classes.root} >
           {feedelements}
          

        </List>
    )
  }  