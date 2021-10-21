import * as React from "react";
import { FC } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { AppBar, Box, Grid, IconButton, Theme, Toolbar, Typography, } from "@mui/material";
import Close from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import menuLogo from "../../assets/KampanosBrandMenu.svg";


export const DrawerMenu: FC<DrawerMenuProps> = ({
  menuItems,
}: DrawerMenuProps) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };
  return (
    <>
      <Button onClick={toggleDrawer}>
        <MenuIcon fontSize="large" />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4177B7",
            padding: 6,
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#4177B7",
              color: "#FFF",
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <img src={menuLogo} alt="Kampanos" title="Kampanos" />
              </Box>
              <Close onClick={toggleDrawer} />
            </Toolbar>
          </AppBar>

          <Grid container>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  marginRight: 0,
                }}
              >
                <MenuItem
                  label='Home'
                  href='#'
                  title='Home'
                  target='_self'
                  color="#878787"
                />
              </Typography>
            </Box>

            <Box
              sx={{
                justifyContent: "center",
              }}
            >
            </Box>

            <Box></Box>
            <Box></Box>
          </Grid>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
export type DrawerMenuProps = {
  menuItems: MenuItemProps[];
};
