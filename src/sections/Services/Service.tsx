import * as React from 'react'
import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Title } from '../../components/Titles/Title'
import serviceImg1 from '../../assets/service1.jpg'
import serviceImg2 from '../../assets/service2.jpg'
import highTech from '../../assets/HighTechnology.svg'
import uxDesign from '../../assets/UxUiDesign.png'
import frontDesign from '../../assets/FrontEnd.jpg'

export const Service: FC<ServiceProps> = ({
  props
}: ServiceProps) => {
  return (
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
          width: '100%',
          paddingY: '6rem'
        }}
      >
        <Grid item
          xs={12}
          sm={10}
          md={7}
          sx={{
            margin: 'auto',
            paddingBottom: '6%'
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
          <img src={highTech} alt='High Technology' title='High Technology' width='100%' height='42px' />
        </Grid>
      </Grid>
      <Grid container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#0D3475',
          width: '100%'
        }}
      >
        <Grid item
          xs={12}
          sm={12}
          md={4}
          sx={{
            padding: 0,
            textAlign: 'center',
            transform: 'rotate(-90deg)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
          }}
        >
          <Grid container
            spacing={2}
            sx={{
              width: '100%'
            }}
          >
            <Grid item>
              <Typography
                component='h2'
                variant='h2'
                sx={{
                  color: '#D46918',
                  minWidth: '407px',

                }}
              >
                OUR SERVICE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={8}
        >
          <Grid container
            spacing={2}
            sx={{
              width: '100%'
            }}
          >
            <Grid item>
              <Box
                sx={{
                  alignItems: 'center'
                }}
              >
                <img src={serviceImg1} alt='Software Development' title='Software Development' />
              </Box>
            </Grid>
            <Grid item>
              <Grid container
                spacing={3}
                sx={{
                  width: '100%',
                  alignSelf: 'center'
                }}
              >
                <Grid item
                  xs={12}
                  md={6}
                >
                  <Box
                    sx={{
                      alignItems: 'left',
                      alignSelf: 'center'
                    }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Mobile & Web Design
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Visual Design
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      User Testing
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Design System
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Prototype
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#fff',
                        alignItems: 'left'
                      }}
                    >
                      Presentations
                    </Typography>
                  </Box>
                </Grid>
                <Grid item
                  xs={12}
                  md={6}
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
          </Grid>
        </Grid>

        {/* <Grid item>
      <Box
        sx={{
          alignItems: 'right'
        }}>
        <img src={serviceImg2} alt='Software Development' title='Software Development' />
      </Box>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          Component based Front-End
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          Web & Mobile
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          Native apps
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          API Connections
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          React Native
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          Fast Development
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            alignItems: 'left'
          }}
        >
          Trustable & Fast Delivery
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={2}>
      <Box>
        <img src={frontDesign} alt='Front-end Development' title='Front-end Development' />
      </Box>
    </Grid> */}

      </Grid>
    </Grid>
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