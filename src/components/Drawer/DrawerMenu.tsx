import * as React from "react";
import { FC } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { AppBar, Box, Grid, styled, Toolbar, Typography, } from "@mui/material";
import Close from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import menuLogo from "../../assets/KampanosBrandMenu.svg";
import FaceIcon from "../../assets/FaceIcon.svg";
import LinkIcon from "../../assets/LinkIcon.svg";
import InstaIcon from "../../assets/InstaIcon.svg";
import workMenuButton from "../../assets/workMenuButton.svg";
import rectangleMenu from "../../assets/rectangleMenu.svg";
import { Link } from "@mui/material";

export const DrawerMenu: FC<DrawerMenuProps> = ({
  menuItems,
}: DrawerMenuProps) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  const MenuBox = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      h2: {
        fontSize: '1.5rem',
        textAlign: 'left',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1rem' }
    },
    [theme.breakpoints.between('sm', 'md')]: {
      h2: {
        fontSize: '2rem',
        textAlign: 'left',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.2rem' }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      h2: {
        fontSize: '2.8rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.45rem' }
    },
    [theme.breakpoints.up('lg')]: {
      h2: {
        fontSize: '3.5rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '3.5rem' }
    },
  }));

  const ItemsBox = styled('div')(({ theme }) => ({
    marginTop: '10rem',
    // margin: 0,
    // padding: 0,
    [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      h2: {
        fontSize: '2rem',
        textAlign: 'left',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.2rem' }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      h2: {
        fontSize: '2.8rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.45rem' }
    },
    [theme.breakpoints.up('lg')]: {
      h2: {
        fontSize: '3.5rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '3.5rem' }
    },
  }));

  return (
    <>
      <Button onClick={toggleDrawer}>
        <MenuIcon fontSize="large" style={{ transform: 'scale(1.2)' }} />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
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
            <Box sx={{ flexGrow: 1}}>
              <Link href="http://www.kampanos.pt/">
                <img src={menuLogo} alt="KampanosLogo" title="KampanosLogo" />
              </Link>
            </Box>
            <Close onClick={toggleDrawer} />
          </Toolbar>
        </AppBar>

        <MenuBox
          sx={{
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4177B7"
          }}
        >
          <Grid container
            sx={{
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4177B7",
              flexGrow: 1
            }}
          >
            {/* Redes */}
            <Grid item
              xs={4}
              sm={4}
              md={2}
              lg={2}
            >
              <Grid container sx={{ justifyContent: 'center' }}>
                <Typography
                  sx={{
                    transform: 'rotate(-90deg)',
                    margin: 0,
                    height: 'fit-content',
                    width: 'auto'
                  }}
                  color=" #FAFAFA"
                >
                  @kampanos 2021
                </Typography>
              </Grid>

              <ItemsBox>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Typography
                    sx={{
                      margin: 0,
                      height: 'fit-content'
                    }}
                    color=" #FAFAFA"
                  >
                    <Link
                      href="https://www.facebook.com"
                      sx={{
                        margin: 0,
                        padding: 0,
                        justifyContent: 'center'
                      }}
                    >
                      <img src={FaceIcon} alt="Facebook" title="Facebook" />
                    </Link>
                  </Typography>
                </Grid>

                <Grid container sx={{ justifyContent: 'center' }}>
                  <Typography
                    sx={{
                      margin: 0,
                      height: 'fit-content'
                    }}
                    color=" #FAFAFA"
                  >
                    <Link
                      href="https://www.linkedin.com/company/kampanos/"
                      sx={{
                        margin: 0,
                        padding: 0,
                        justifyContent: 'center'
                      }}
                    >
                      <img src={LinkIcon} alt="Linkedin" title="Linkedin" />
                    </Link>
                  </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Typography
                    sx={{
                      margin: 0,
                      height: 'fit-content'
                    }}
                    color=" #FAFAFA"
                  >
                    <Link
                      href="https://www.instagram.com/kampanos.pt/"
                      sx={{
                        margin: 0,
                        padding: 0,
                        justifyContent: 'center'
                      }}
                    >
                      <img src={InstaIcon} alt="Instagram" title="Instagram" />
                    </Link>
                  </Typography>
                </Grid>
              </ItemsBox>
            </Grid>

            <Grid item
              xs={8}
              sm={8}
              md={10}
              lg={10}>

              <Grid container
                spacing={2}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Grid item>
                  <Grid container direction='column'>
                    <Grid item className='link'>
                      <Box onClick={toggleDrawer} className='link'>
                        <Typography
                          className='link'
                          variant="h2"
                          sx={{
                            marginRight: 0
                          }}
                        >
                          <MenuItem
                            label='Home'
                            href='#header'
                            title='Home'
                            target='_self'
                            color="#6AA2DB"
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
                      <Box onClick={toggleDrawer}>
                        <Typography
                          className='link'
                          variant="h2"
                          sx={{
                            marginRight: 0
                          }}
                        >
                          <MenuItem
                            label='About us'
                            href='#about'
                            title='About us'
                            target='_self'
                            // hover='#fff'
                            color="#6AA2DB"
                          />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box onClick={toggleDrawer}>
                        <Typography
                          variant="h2"
                          sx={{
                            marginRight: 0
                          }}
                        >
                          <MenuItem
                            label='Our services'
                            href='#service'
                            title='Our services'
                            target='_self'
                            // hover='#fff'
                            color="#6AA2DB"
                          />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box onClick={toggleDrawer}>
                        <Typography
                          variant="h2"
                          sx={{
                            marginRight: 0
                          }}
                        >
                          <MenuItem
                            label='Our story'
                            href='#story'
                            title='Our story'
                            target='_self'
                            color="#6AA2DB"
                          // hover='#fff'
                          />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box onClick={toggleDrawer}>
                        <Typography
                          variant="h2"
                          sx={{
                            marginRight: 0
                          }}
                        >
                          <MenuItem
                            label='Our team'
                            href='#team'
                            title='Our team'
                            target='_self'
                            // hover='#fff'
                            color="#6AA2DB"
                          />
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* Let's work together */}
              <Grid container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                direction="row"
                sx={{
                  height: '250px',
                  alignContent: 'end',
                  justifyContent: "right",
                  alignItems: "bottom",
                  paddingRight: '1rem'
                }}
              >
                <Grid item>
                  <Grid container>
                    <Grid container direction="row"
                      justifyContent="flex-end"
                      alignItems="flex-end" spacing={3}>
                      <Grid item>
                        <Typography variant="h3" color="#FAFAFA">Let’s work together!</Typography>
                      </Grid>
                      <Grid item display={{ xs: 'none', sm: 'block' }}>
                        <img src={rectangleMenu} alt="Facebook" title="Facebook" />
                      </Grid>
                      <Grid item>
                        <img src={workMenuButton} alt="Facebook" title="Facebook" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </MenuBox>
      </SwipeableDrawer>
    </>
  );
};
export type DrawerMenuProps = {
  menuItems: MenuItemProps[];
};
