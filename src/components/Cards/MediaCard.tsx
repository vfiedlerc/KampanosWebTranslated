import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react'


export const MediaCard: FC<MediaCardProps> = ({
  image,title,text
}: MediaCardProps ) => {
  return (
    <Card sx={{ width: 200, height: 250, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height="140"
        width="200"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" sx={{color:'#D46918', textAlign: 'center', fontWeight: 'bold', fontSize: '15px',}}>
        {title}
        </Typography>
        <Typography variant="body2" sx={{color:'#18191F', textAlign: 'center', fontSize: '15px',}}>
        {text}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Linkedin</Button>
        <Button size="small">Instagram</Button>
      </CardActions> */}
    </Card>
  );
}

export type MediaCardProps = {
  image: string
  title: string
  text: string
};