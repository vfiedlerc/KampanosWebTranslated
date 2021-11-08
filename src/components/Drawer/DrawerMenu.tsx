import * as React from "react";
import { FC } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { AppBar, Box, Divider, Grid, styled, Toolbar, Typography, } from "@mui/material";
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

  const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const MenuBox = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      h2: {
        fontSize: '2rem',
        textAlign: 'left',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.45rem', paddingBottom: '1.2rem' }
    },
    [theme.breakpoints.between('sm', 'md')]: {
      h2: {
        fontSize: '2.5rem',
        textAlign: 'left',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '1.45rem' }
    },
    [theme.breakpoints.between('md', 'lg')]: {
      h2: {
        fontSize: '2.8rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '2rem' }
    },
    [theme.breakpoints.up('lg')]: {
      h2: {
        fontSize: '3.5rem',
        paddingBottom: '1.2rem'
      },
      h3: { fontSize: '2.5rem' }
    },
  }));

  const ItemsBox = styled('div')(({ theme }) => ({
    marginTop: '10rem',
  }));

  const BottomBox = styled('div')(({ theme }) => ({
    margin: '3rem auto 0',
    padding: 0,
    display: 'flex',

    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'end',
      alignContent: 'flex-end',
      flexDirection: 'row'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      justifyContent: 'end',
      alignContent: 'flex-end',
      flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'end',
      alignContent: 'flex-end',
      flexDirection: 'row'
    },
  }));

  return (
    <>
      <Button onClick={toggleDrawer}>
        <MenuIcon fontSize="large" style={{ transform: 'scale(1.4)' }} />
      </Button>

      <SwipeableDrawer
        ModalProps={{
          keepMounted: true,
          disableEnforceFocus: true
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
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
            paddingTop: '2%',
            paddingLeft: '5%',
            paddingRight: '5%'
          }}
        >
          <Toolbar >
            <Box sx={{ flexGrow: 1 }}>
              <Button href="http://www.kampanos.pt/">
                <img src={menuLogo} alt="KampanosLogo" title="KampanosLogo" />
              </Button>
            </Box>
            <Close onClick={toggleDrawer} style={{ transform: 'scale(1.4)', marginRight: '2rem' }} />
          </Toolbar>
        </AppBar>

        <MenuBox
          sx={{
            width: "100vw",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4177B7",
            overflow: 'hidden'
          }}
        >
          <Grid container
            sx={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4177B7",
              flexGrow: 1
            }}
          >
            {/* Redes */}
            <Grid item
              xs={2}
              sm={2}
              md={2}
              lg={2}
              display={{ xs: 'none', sm: 'none', md: 'block' }}
              sx={{
                justifyContent: 'left',
                width: '100%',
                paddingLeft: '5%',
                paddingRight: '5%',
              }}
            >
              <Grid container
                sx={{
                  WebkitWritingMode: 'vertical-lr',
                  transform: 'rotate(-180deg)',
                  alignItems: 'center'
                }}>
                <Typography
                  variant='caption'
                  sx={{
                    margin: 0,
                    color: "#FAFAFA",
                    fontSize: '1rem'
                  }}
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
                <Grid container sx={{ justifyContent: 'center', minHeight: 'max-content' }}>
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
              xs={10}
              sm={10}
              md={10}
              lg={10}>
              {/* Menu */}
              <Grid container
                spacing={2}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                direction="row"
                sx={{
                  alignContent: 'center',
                  justifyContent: "left",
                  alignItems: "center",
                  //marginLeft: '1rem'
                }}
              >
                <Grid item >
                  <Grid container direction='column'>
                    <Grid item>
                      <Box onClick={toggleDrawer}>
                        <Typography
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
                sx={{
                  bottom: 0,
                  paddingRight: '1rem'
                }}
              >
                <Grid item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                >
                  <Grid container>
                    <BottomBox>
                      <Grid item
                        sx={{ alignSelf: 'center' }}
                      >
                        <Typography
                          variant="h3"
                          color="#FAFAFA">
                          Let’s work together!
                        </Typography>
                      </Grid>
                      <Grid item
                        display={{ xs: 'none', sm: 'block', md: 'block' }}
                      >
                        <Divider
                          variant='middle'
                          flexItem
                          sx={{
                            color: '#fff',
                            backgroundColor: '#fff',
                            border: '2px solid #fff',
                            height: '4rem'
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          href="mailto:service@kampanos.pt"
                          target='_blank'
                          variant="contained"
                          sx={{
                            color: '#fff',
                            backgroundColor:
                              '#0D3475',
                            padding: '.7rem 2rem',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                          }}
                        >
                          Work with us
                        </Button>
                      </Grid>
                    </BottomBox>
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
function useStyles() {
  throw new Error("Function not implemented.");
}

