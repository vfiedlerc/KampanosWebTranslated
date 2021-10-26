import * as React from "react";
import './styles.css'
import { FC } from "react";
import { Link, Grid, styled } from "@mui/material";
import { HashLink } from 'react-router-hash-link';

export const MenuItem: FC<MenuItemProps> = ({
  label,
  target,
  href,
  title,
  color,
  // hover
}: MenuItemProps) => {
  return (
    <HashLink
      className='link'
      to={href}
      title={label}
      target={target}
      style={{
        color:  `${color}` 
      }}
    >
      {label}
    </HashLink>
  )
};

export type MenuItemProps = {
  label: string;
  target: string;
  href: string;
  title: string;
  color: string | '#FFF'
  // hover: string | '#000'
};