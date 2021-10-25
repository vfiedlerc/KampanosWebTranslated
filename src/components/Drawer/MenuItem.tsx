// @ts-check
import * as React from "react";
import { FC } from "react";
import { Link, Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export const MenuItem: FC<MenuItemProps> = ({
  label,
  target,
  href,
  title,
  color
}: MenuItemProps) => {
  return (
    <HashLink
      href={href}
      title={label}
      target={target}
      underline="hover"
      color={color}
    >    
      {label}
    </HashLink>
  );
};

export type MenuItemProps = {
  label: string;
  target: string;
  href: string;
  title: string;
  color: string | '#FFF';
};
