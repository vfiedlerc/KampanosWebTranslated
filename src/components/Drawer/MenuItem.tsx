// @ts-check
import * as React from "react";
import { FC } from "react";
import { Link, Grid } from "@mui/material";


export const MenuItem: FC<MenuItemProps> = ({
  label,
  target,
  href,
  title,
  color
}: MenuItemProps) => {
  return (
    <Link
      href={href}
      title={label}
      target={target}
      underline="hover"
      color={color}
    >    
      {label}
    </Link>
  );
};

export type MenuItemProps = {
  label: string;
  target: string;
  href: string;
  title: string;
  color: string | '#FFF';
};
