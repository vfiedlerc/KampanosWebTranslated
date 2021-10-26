import * as React from "react";
import { FC } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { Title } from "../../components/Titles/Title";
import about1 from "../../assets/About1.svg";
import about2 from "../../assets/About2.svg";
import about3 from "../../assets/About3.svg";
import about4 from "../../assets/About4.svg";
import TimeToFly from "../../assets/TimeToFly.svg";

const FontsBox = styled("div")(({ theme }) => ({
  margin: 0,
  padding: 0,

  [theme.breakpoints.down("sm")]: {
    h1: {
      transform: "none",
      fontSize: "2rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
      textAlign: "left",
    },
    h5: { fontSize: "1rem" },
    p: {
      textAlign: "center",
    },
    span: {
      fontSize: "1.5rem",
      textAlign: "left",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    h1: {
      transform: "none",
      fontSize: "2.5rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    h2: {
      fontSize: "2rem",
      textAlign: "left",
    },
    h5: { fontSize: "1.2rem" },
    p: {
      textAlign: "center",
    },
    span: {
      fontSize: "2rem",
      textAlign: "left",
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    h1: {
      transform: "rotate(-90deg)",
      fontSize: "3rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "13rem",
      marginBottom: "2rem",
    },
    h2: { fontSize: "2.8rem" },
    h5: { fontSize: "1.45rem" },
    p: {
      textAlign: "left",
    },
    span: { fontSize: "2.8rem" },
  },
  [theme.breakpoints.up("lg")]: {
    h1: {
      transform: "rotate(-90deg)",
      fontSize: "3rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "13rem",
      marginBottom: "2rem",
    },
    h2: { fontSize: "3rem" },
    h5: { fontSize: "1.58rem" },
    p: {
      textAlign: "left",
    },
    span: { fontSize: "3rem" },
  },
}));

export const About: FC<AboutProps> = ({ props }: AboutProps) => {
  return (
    <FontsBox sx={{ margin: '4rem 1rem' }}>
      <Grid container id="about"
        sx={{
          backgroundColor: "#FFF",
          mt: 30
        }}
      >

        <Grid
          container
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            
            width: "100%",
          }}
        >
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={3}     
            
            sx={{
              padding: 4,
              margin: 0,
              backgroundColor: "#FFF",
            }}
          >
            <Title color="#D46918" label="ABOUT US" />
          </Grid> */}

          <Grid item
            direction='column'
            xs={12}
            sm={12}
            md={3}
            sx={{
              padding: 0,
              flexGrow: 0,
              margin: 0,
              width: '100%',
              backgroundColor: '#fff',
              alignSelf: 'start'
            }}
          >
            <Title color='#D46918' label='ABOUT US' />
          </Grid>

          <Grid item xs={12} sm={12} md={9}>
            <Grid
              container
              spacing={2}
              sx={{
                paddingBottom: "8rem",
                backgroundColor: "#ffffff",
              }}
            >
              <Grid
                item
                order={{ xs: 3, sm: 3, md: 1 }}
                md={4}
                sx={{
                  padding: 0,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#0D3475",
                    wordBreak: "break-word",
                    fontWeight: 'bold',
                  }}
                >
                  Kampanos is a fully remote IT and tech solutions company...
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#0D3475",
                      wordBreak: "break-word",
                      fontSize: "3.75rem",
                      letterSpacing: 0,

                    }}
                  >
                    {" "}
                    that aims to create the best apps, websites, landing pages,
                    tech and visual solutions for our clients. Working at
                    Kampanos means working remotely. We strongly believe that
                    remote jobs are the future and success can be achieved
                    through this.
                  </Typography>
                </Typography>
              </Grid>

              <Grid
                item
                order={{ xs: 2, sm: 2, md: 2 }}
                md={2}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              />

              <Grid
                item
                md={4}
                order={{ xs: 1, sm: 1, md: 3 }}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              >
                <Grid
                  container
                  sx={{
                    textAlign: "right",
                    alignItems: "top",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "right",
                    }}
                  >
                    <img
                      src={about1}
                      alt="computers icon"
                      title="computers ico"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                paddingBottom: "8rem",
                backgroundColor: "#ffffff",
              }}
            >
              <Grid
                item
                md={4}
                order={{ xs: 1, sm: 1, md: 1 }}
                sx={{
                  padding: 0,
                }}
              >
                <Box
                  sx={{
                    alignItems: "right",
                  }}
                >
                  <img src={about2} alt="happy girl" title="happy girl" />
                </Box>
              </Grid>

              <Grid
                item
                order={{ xs: 2, sm: 2, md: 2 }}
                md={2}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              />

              <Grid
                item
                order={{ xs: 3, sm: 3, md: 3 }}
                md={4}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              >
                <Grid
                  container
                  sx={{
                    textAlign: "right",
                    alignItems: "top",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "right",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#0D3475",
                        wordBreak: "break-word",
                        fontWeight: 'bold',
                      }}
                    >
                      Success comes from passion and motivation...
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#0D3475",
                          wordBreak: "break-word",
                          fontSize: "3.75rem",
                          letterSpacing: 0,
                        }}
                      >
                        {" "}
                        the love for being part of something that makes a difference in the world, that drives people, companies and projects
                        Grabbing our digital construction tools from home allows us to build amazing things in this incredible and ever-growing digital world.
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "#FFF",
        }}
      >


        <Grid
          container
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              padding: 0,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              textAlignLast: "center",
              margin: 0,
              backgroundColor: "#FFFFFF",
            }}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={9}>
            <Grid
              container
              spacing={2}
              sx={{
                paddingBottom: "8rem",
                backgroundColor: "#ffffff",
              }}
            >
              <Grid
                item
                order={{ xs: 3, sm: 3, md: 1 }}
                md={4}
                sx={{
                  padding: 0,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#0D3475",
                    wordBreak: "break-word",
                    fontWeight: 'bold',
                  }}
                >
                  We celebrate loyalty and achievements.
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#0D3475",
                      wordBreak: "break-word",
                      fontSize: "3.75rem",
                      letterSpacing: 0,
                    }}
                  >
                    {" "}
                    We want to help you achieve your goals and your dreams.
                    We want to help you achieve your goals and your dreams.
                    We want to help you achieve your goals and your dreams.
                    We want to help you achieve your goals and your dreams.
                    We want to help you achieve your goals and your dreams.

                  </Typography>
                </Typography>
              </Grid>

              <Grid
                item
                order={{ xs: 2, sm: 2, md: 2 }}
                md={2}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              />

              <Grid
                item
                md={4}
                order={{ xs: 1, sm: 1, md: 3 }}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#FFF",
                }}
              >
                <Grid
                  container
                  sx={{
                    textAlign: "right",
                    alignItems: "top",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "right",
                    }}
                  >
                    <img
                      src={about3}
                      alt="cheering"
                      title="cheering"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                paddingBottom: "8rem",
                backgroundColor: "#ffffff",
              }}
            >
              <Grid
                item
                md={4}
                order={{ xs: 1, sm: 1, md: 1 }}
                sx={{
                  padding: 0,
                }}
              >
                <Box
                  sx={{
                    alignItems: "right",
                  }}
                >
                  <img src={about4} alt="pointing" title="pointing" />
                </Box>
              </Grid>

              <Grid
                item
                order={{ xs: 2, sm: 2, md: 2 }}
                md={2}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#ffffff",
                }}
              />

              <Grid
                item
                order={{ xs: 3, sm: 3, md: 3 }}
                md={4}
                sx={{
                  alignItems: "top",
                  backgroundColor: "#ffffff",
                }}
              >
                <Grid
                  container
                  sx={{
                    textAlign: "right",
                    alignItems: "top",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "right",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#0D3475",
                        wordBreak: "break-word",
                        fontWeight: 'bold',
                      }}
                    >
                      We offer a slate of services regarding IT...
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#0D3475",
                          wordBreak: "break-word",
                          fontSize: "3.75rem",
                          letterSpacing: 0,
                        }}
                      >
                        {" "}
                        and Technology aswell as App Design and Development, Web Design solutions, Marketing and Social Media, Branding, Graphic Design, Programming and more.
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              padding: 0,
            }}
          >
            <Box
              sx={{
                alignItems: "center",
              }}
            >
              <img src={TimeToFly} alt="Time to Fly" title="Time to Fly" />
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </FontsBox>
  );
};
export type AboutProps = {
  props: any;
};

