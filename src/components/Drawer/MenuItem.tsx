import * as React from "react";
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

  const StyleLink = styled('div')(({ theme }) => ({
    a: {
      color: `${color}`,
      fontWeight: 'bold',
      '&:hover': {
        color: "#fff",
      }
    }
  }));
  
  return (
    <StyleLink>
      <Link
        className='link'
        href={href}
        title={label}
        target={target}
        underline='none'
      >
        {label}
      </Link>
    </StyleLink>
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