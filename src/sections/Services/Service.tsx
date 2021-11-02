import * as React from 'react'
import { FC } from 'react'
import { Grid, styled, Typography } from '@mui/material'
import { Title } from '../../components/Titles/Title'
import serviceImg1 from '../../assets/service1.png'
import serviceImg2 from '../../assets/service2.png'
import uxDesign from '../../assets/UxUiDesign.png'
import frontDesign from '../../assets/FrontEnd.png'
import { Subtitle } from '../../components/Titles/Subtitle'
import { lineHeight } from '@mui/system'

const FontsBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: '0 auto 6rem',
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
      textAlign: 'left',
      marginTop: '3rem',
      marginBottom: '1.2rem'
    },
    h5: { fontSize: '1rem' },
    p: {
      textAlign: 'center'
    },
    span: {
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    h1: {
      transform: 'none',
      fontSize: '3rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '6rem',
      marginTop: '1rem',
      marginBottom: '2rem'
    },
    h2: {
      fontSize: '2rem',
      textAlign: 'left',
      marginTop: '3rem',
      marginBottom: '1.2rem'
    },
    h5: { fontSize: '1.2rem' },
    p: {
      textAlign: 'center'
    },
    span: {
      fontSize: '2rem',
      textAlign: 'center'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '4rem'
    },
    h2: {
      fontSize: '2.8rem',
      marginTop: '5rem',
      marginBottom: '1.2rem',
      textAlign: 'left',
    },
    h5: { fontSize: '1.45rem' },
    p: {
      textAlign: 'left'
    },
    span: { fontSize: '2.8rem' }
  },
  [theme.breakpoints.up('lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '4rem'
    },
    h2: {
      fontSize: '3rem',
      marginTop: '5rem',
      marginBottom: '1.2rem'
    },
    h5: { fontSize: '1.58rem' },
    p: {
      textAlign: 'left'
    },
    span: { fontSize: '3rem' }
  },
}));

const ImgBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    textAlign: '-webkit-center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: '-webkit-center',
    alignContent: 'center'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    textAlign: '-webkit-right',
    alignContent: 'right'
  },
  [theme.breakpoints.up('lg')]: {
    textAlign: '-webkit-right',
    alignContent: 'right'
  }
}));

const TextBox = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    textAlign: '-webkit-center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '1rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: '-webkit-center',
    alignContent: 'center',
    paddingTop: '1rem'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    paddingTop: '3rem'
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '3.5rem'
  }
}));

const Text2Box = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    textAlign: '-webkit-center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: '1rem'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: '-webkit-center',
    alignContent: 'center'
  }
}));

const SubtitleBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    span: {
      fontSize: '1.2rem',
      textAlign: 'center'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    span: {
      fontSize: '1.5rem',
      textAlign: 'center'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    span: { fontSize: '1.8rem' }
  },
  [theme.breakpoints.up('lg')]: {
    span: { fontSize: '2.5rem' }
  }
}));

export const Service: FC<ServiceProps> = ({
  props
}: ServiceProps) => {
  return (
    <FontsBox>
      <Grid container id="service"
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
            sm={9}
            md={7}
            lg={6}
            sx={{
              margin: 'auto',
              paddingY: '4%'
            }}
          >
            <Typography
              variant='h2'
              sx={{
                color: '#fff',
                wordBreak: 'break-word'
              }}
            >
              We use high technology that works.We always
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
              marginBottom: '10%'
            }}
          >
            <SubtitleBox
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                // fontWeight: '500',
                opacity: .8,
               
               
              }}
            > <Subtitle color='#D46918' fillColor='#D46918' label=' high technology ' stroke='.9px' direction='right' />
            </SubtitleBox>
          </Grid>
        </Grid>
        <Grid container
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            backgroundColor: '#0D3475',
            width: '100%'
          }}
        >
          <Grid item
            direction='column'
            xs={12}
            sm={12}
            md={3}
            sx={{
              padding: 0,
              flexGrow: 0,
              marginBottom: '10%',
              width: '100%',
              alignSelf: 'center'
            }}
          >
            <Title color='#FAFAFA' label='OUR SERVICE' />
          </Grid>
          <Grid container
          justifyContent="flex-start"
            xs={12}
            sm={12}
            md={9}
            sx={{
             
              alignItems: "flex-start",
              paddingRight: '14%',
            }}
          >
            <Grid container
              spacing={2}
              justifyContent="flex-start"
              sx={{
                paddingBottom: '12%',
                
              }}
            >
              <Grid item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  padding: 0
                }}
              >
                <ImgBox
                  sx={{
                    padding: 0
                  }}
                >
                  <img src={serviceImg1} alt='Software Development' title='Software Development' width='400px' />
                </ImgBox>
              </Grid>
              <Grid item
                xs={12}
                sm={12}
                md={8}
                sx={{
                  textAlign: 'right',
                  alignItems: 'top'
                }}
              >
                <Grid container
                  sx={{
                    textAlign: 'right',
                    alignItems: 'top'
                  }}
                >
                  <Grid item
                    xs={12}
                    sm={12}
                    md={11}
                    sx={{
                      alignItems: 'bottom'
                    }}
                  >
                    <ImgBox>
                      <img src={uxDesign} alt='UI/UX Design' title='UI/UX Design' width='260px' />
                    </ImgBox>
                  </Grid>
                  <TextBox>
                    <Grid item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{
                        justifyContent: 'center',
                        alignSelf: 'bottom',

                      }}
                    >
                      <Typography
                        
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Mobile & Web Design
                      </Typography>
                      <Typography
                       
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          fontSize: '1rem',
                          lineHeight: '27px',
                        }}
                      >
                        Visual Design
                      </Typography>
                      <Typography
                        
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        User testing
                      </Typography>
                      <Typography
                       
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Prototype
                      </Typography>
                      <Typography
                        
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Presentations
                      </Typography>
                    </Grid>
                  </TextBox>
                </Grid>
              </Grid>
            </Grid>

            <Grid container
              spacing={2}
              sx={{
                paddingBottom: '4rem'
              }}
            >
              <Grid item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  padding: 0,
                  paddingBottom: '10%',
                }}
              >
                <ImgBox>
                  <img src={serviceImg2} alt='Software Development' title='Software Development' width='400px' />
                </ImgBox>
              </Grid>
              <Grid item
                xs={12}
                sm={12}
                md={8}
                sx={{
                  textAlign: 'right',
                  alignItems: 'top'
                }}
              >
                <Grid container
                  sx={{
                    textAlign: 'right',
                    alignItems: 'top'
                  }}
                >
                  <Grid item
                    xs={12}
                    sm={12}
                    md={11}
                    sx={{
                      alignItems: 'top'
                    }}
                  >
                    <ImgBox>
                      <img src={frontDesign} alt='Front-end Design' title='Front-end Design' width='170px' />
                    </ImgBox>
                  </Grid>
                  <Text2Box>
                    <Grid item
                      xs={12}
                      sm={12}
                      md={12}
                      sx={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                       
                        //paddingTop: '1rem'
                      }}
                    >
                      <Typography
                        
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Component based Front-End
                      </Typography>
                      <Typography
                      
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Web & Mobile
                      </Typography>
                      <Typography
                    
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Native apps
                      </Typography>
                      <Typography
                      
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        API Connections
                      </Typography>
                      <Typography
                        
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        React Native
                      </Typography>
                      <Typography
                       
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Fast Development
                      </Typography>
                      <Typography
                       
                        sx={{
                          color: '#fff',
                          alignItems: 'left',
                          lineHeight: '27px',
                          fontSize: '1rem',
                        }}
                      >
                        Trustable & Fast Delivery
                      </Typography>
                    </Grid>
                  </Text2Box>
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