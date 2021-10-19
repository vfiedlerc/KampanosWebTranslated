import * as React from 'react'
import { FC } from 'react'
import { Box, Grid, styled, Typography } from '@mui/material'
import { Title } from '../../components/Titles/Title'
import serviceImg1 from '../../assets/service1.png'
import serviceImg2 from '../../assets/service2.png'
import highTech from '../../assets/HighTechnology.svg'
import uxDesign from '../../assets/UxDesign.png'
import frontDesign from '../../assets/FrontEnd.png'
import ourService from '../../assets/OurService.svg'

const FontsBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    h1: {
      transform: 'none',
      fontSize: '2rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    },
    h2: {
      fontSize: '1.5rem',
      textAlign: 'left'
    },
    h5: { fontSize: '1rem' },
    p: {
      textAlign: 'center'
    },
    span: {
      fontSize: '1.5rem',
      textAlign: 'left'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    h1: {
      transform: 'none',
      fontSize: '2.5rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    },
    h2: {
      fontSize: '2rem',
      textAlign: 'left'
    },
    h5: { fontSize: '1.2rem' },
    p: {
      textAlign: 'center'
    },
    span: {
      fontSize: '2rem',
      textAlign: 'left'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '2rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    },
    h2: { fontSize: '2.8rem' },
    h5: { fontSize: '1.45rem' },
    p: {
      textAlign: 'left'
    },
    span: { fontSize: '2.8rem' }
  },
  [theme.breakpoints.up('lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '2rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    },
    h2: { fontSize: '3rem' },
    h5: { fontSize: '1.58rem' },
    p: {
      textAlign: 'left'
    },
    span: { fontSize: '3rem' }
  },
}));

export const Service: FC<ServiceProps> = ({
  props
}: ServiceProps) => {
  return (
    <FontsBox>
      <Grid container
        sx={{
          backgroundColor: '#0D3475'
        }}>
        <Grid container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            backgroundColor: '#0D3475',
            width: '100%'
          }}
        >
          <Grid item
            xs={10}
            sm={7}
            md={7}
            lg={6}
            sx={{
              margin: 'auto',
              paddingBottom: '6%',
              textAlign: 'center'
            }}
          >
            <Typography
              variant='h2'
              sx={{
                color: '#fff',
                wordBreak: 'break-word'
              }}
            >
              We use high technology that works. We always
              <Typography
                variant='caption'
                sx={{
                  color: '#D46918',
                  wordBreak: 'break-word',
                  fontSize: '3.75rem',
                  letterSpacing: 0
                }}
              > get it done.
              </Typography>
            </Typography>
          </Grid>
          <Grid item
            xs={12}
            sx={{
              width: '100%',
              marginBottom: '6%'
            }}
          >
            <img src={highTech} alt='High Technology' title='High Technology' />
          </Grid>
        </Grid>

        <Grid container
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            backgroundColor: '#0D3475',
            width: '100%'
          }}
        >
          <Grid item
            xs={12}
            sm={12}
            md={3}
            sx={{
              padding: 0,
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              textAlignLast: 'center',
              margin: 0,
              backgroundColor: '#0D3475',
            }}
          >
            {/* <img src={ourService} alt='Our Service' /> */}
            <Typography
              variant='h1'
            >
              OUR SERVICE
            </Typography>
          </Grid>

          <Grid item
            xs={12}
            sm={12}
            md={9}
          >
            <Grid container
              spacing={2}
              sx={{
                paddingBottom: '8rem'
              }}
            >
              <Grid item
                md={4}
                sx={{
                  padding: 0
                }}
              >
                <img src={serviceImg1} alt='Software Development' title='Software Development' />
              </Grid>

              <Grid item
                md={3}
                sx={{
                  alignSelf: 'end',
                  paddingBottom: '1.2rem'
                }}
              >
                <Grid container
                >
                  <Grid item
                    sx={{
                      alignSelf: 'end'
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Mobile & Web Design
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Visual Design
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      User Testing
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Design System
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Prototype
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Presentations
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item
                md={3}
                sx={{
                  alignItems: 'top'
                }}
              >
                <Grid container
                  sx={{
                    textAlign: 'right',
                    alignItems: 'top'
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'right'
                    }}
                  >
                    <img src={uxDesign} alt='UI/UX Design' title='UI/UX Design' />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid container
              spacing={2}
              sx={{
                width: '100%'
              }}
            >
              <Grid item
                md={4}
                sx={{
                  padding: 0
                }}
              >
                <img src={serviceImg2} alt='Software Development' title='Software Development' />
              </Grid>
              <Grid item
                md={3}
                sx={{
                  alignSelf: 'end',
                  paddingBottom: '2rem'
                }}
              >
                <Grid container
                >
                   <Grid item
                md={3}
                sx={{
                  alignItems: 'top'
                }}
              >
                <Grid container
                  sx={{
                    width: '100%',
                    textAlign: 'right',
                    alignItems: 'top'
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'right'
                    }}
                  >
                    <img src={frontDesign} alt='Front-end Design' title='Front-end Design' />
                  </Box>
                </Grid>
              </Grid>
                  <Grid item
                    sx={{
                      width: '100%',
                      alignSelf: 'end'
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Component based Front-End
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Web & Mobile
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Native apps
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      API Connections
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      React Native
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Fast Development
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Trustable & Fast Delivery
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
             
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </FontsBox>
  );
}
export type ServiceProps = {
  props: any
};

{/* <Typography
variant="h5"
sx= {{
  color: '#D46918'
}}
>
Service
</Typography> */}