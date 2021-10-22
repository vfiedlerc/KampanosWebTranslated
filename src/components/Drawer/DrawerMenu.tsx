import * as React from "react";
import { FC } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { AppBar, Box, Grid, Icon, IconButton, Theme, Toolbar, Typography, } from "@mui/material";
import Close from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import menuLogo from "../../assets/KampanosBrandMenu.svg";

import FaceIcon from "../../assets/FaceIcon.svg";
import LinkIcon from "../../assets/LinkIcon.svg";
import InstaIcon from "../../assets/InstaIcon.svg";
import workMenuButton from "../../assets/workMenuButton.svg";
import rectangleMenu from "../../assets/rectangleMenu.svg";


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




          <Grid container spacing={2} direction="column"
            justifyContent="center"
            alignItems="flex-start"


          >

            <Grid item direction="column">


              <Grid container>
                <Grid item>



                  <Grid container direction="column">

                    <Grid item xs={12}>  

                    <Typography sx={{ transform: 'rotate(-90deg)' }} color=" #FAFAFA">
                      
                       @kampanos 2021

                     </Typography></Grid>



                    <Grid item xs={12}>
                      <img src={FaceIcon} alt="Facebook" title="Facebook" />
                    </Grid>

                    <Grid item xs={12}>
                      <img src={LinkIcon} alt="Facebook" title="Facebook" />
                    </Grid>

                    <Grid item xs={12}>
                      <img src={InstaIcon} alt="Facebook" title="Facebook" />
                    </Grid>
                  </Grid>

                </Grid>

                <Grid item direction="column">



                </Grid>

              </Grid>



            </Grid>
            <Grid item>
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
            </Grid>




            <Grid item>

              <Box
                sx={{
                  justifyContent: "center",
                }}
              >
              </Box>


              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    marginRight: 0,


                  }}
                >
                  <MenuItem
                    label='About us'
                    href='#'
                    title='About us'
                    target='_self'
                    color="#878787"
                  />
                </Typography>
              </Box>
            </Grid>








            <Grid item>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    marginRight: 0,

                  }}
                >
                  <MenuItem
                    label='Our services'
                    href='#'
                    title='Our services'
                    target='_self'
                    color="#878787"
                  />
                </Typography>
              </Box>

            </Grid>





            <Grid item>

              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    marginRight: 0,

                  }}
                >
                  <MenuItem
                    label='Our story'
                    href='#'
                    title='Our story'
                    target='_self'
                    color="#878787"
                  />
                </Typography>
              </Box>
            </Grid>




            <Grid item>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    marginRight: 0,

                  }}
                >
                  <MenuItem
                    label='Our team'
                    href='#'
                    title='Our team'
                    target='_self'
                    color="#CEE8F9"
                  />
                </Typography>
              </Box>
            </Grid>

            <Grid container direction="row"
              justifyContent="flex-end"
              alignItems="flex-end" spacing={3}>


              <Grid item>
                <Typography variant="h3" color="#FAFAFA">Let’s work together!</Typography>
              </Grid>



              <Grid item>
                <img src={rectangleMenu} alt="Facebook" title="Facebook" />
              </Grid>

              <Grid item>
                <img src={workMenuButton} alt="Facebook" title="Facebook" />
              </Grid>

            </Grid>


          </Grid>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
export type DrawerMenuProps = {
  menuItems: MenuItemProps[];
};
