import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";

export const MediaCard: FC<MediaCardProps> = ({
  image,
  title,
  text,
}: MediaCardProps) => {
  return (
    <Card
      sx={{
        width: 290,
        height: 470,
        boxShadow: 0,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%)",
        filter: "drop-shadow(0px 4px 152px rgba(212, 105, 24, 0.07))",
        
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        width="90%"
        image={image}
        alt={title}
        sx={{ backgroundColor: "transparent" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          sx={{
            color: "#D46918",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#18191F", textAlign: "center", fontSize: "22px" }}
        >
          {text}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Linkedin</Button>
        <Button size="small">Instagram</Button>
      </CardActions> */}
    </Card>
  );
};

export type MediaCardProps = {
  image: string;
  title: string;
  text: string;
};
