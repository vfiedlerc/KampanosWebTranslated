import * as React from "react";
import "./Subtitle.css";
import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const SubtitleBox = styled("span")(({ theme }) => ({
  margin: 0,
  padding: 0,
}));

export const Subtitle: FC<SubtitleProps> = ({
  label,
  color,
  stroke,
  direction,
  fillColor,
}: SubtitleProps) => {
  return (
    <SubtitleBox>
      <Marquee direction={direction} speed={20} gradient={false} delay={0}>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: `${color}`,
            WebkitTextFillColor: fillColor ? `${color}` : "transparent",
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: "400",
            paddingRight: "5px",
          }}
        >
          {" "}
          {label}
        </Typography>
      </Marquee>
    </SubtitleBox>
  );
};
export type SubtitleProps = {
  label: string;
  color: string | "#000000";
  stroke: string;
  direction: "left" | "right" | undefined;
  fillColor?: string;
};
