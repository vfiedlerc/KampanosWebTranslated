// @ts-check
import * as React from "react";
import { FC } from "react";
import { Link, Grid } from "@mui/material";


/**
 * Provide documentation
 */
export const MenuItem: FC<MenuItemProps> = ({
  label,
  target,
  href,
  size,
  title,
  color
}: MenuItemProps) => {
  return (

    <Grid container>

      <Link
        href={"https://www.google.com/"}
        title={label}
        target={target}
        underline="none"
        color={color} >
       {label}
      </Link>
      
    </Grid>





  );
};

export type MenuItemProps = {
  label: string;
  target: string;
  href: string;
  size: number;
  title: string;
  color: string | '#FFF';
};
