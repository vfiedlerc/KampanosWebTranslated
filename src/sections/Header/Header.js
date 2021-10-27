import { Paper, Grid, styled, Typography, Link, Button } from '@mui/material'
import FaceIcon from "../../assets/FacebookIcon.svg";
import LinkIcon from "../../assets/LinkedinIcon.svg";
import InstaIcon from "../../assets/InstagramIcon.svg";
import centerLogo from '../../assets/KampanosLogo.svg'
import Topbar from '../../components/Topbar/Topbar'
import { Subtitle } from '../../components/Titles/Subtitle'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const MenuBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    minHeight: '80vh',
    h2: {
      fontSize: '2rem',
      textAlign: 'left',
      paddingBottom: '1.2rem'
    },
    h3: { fontSize: '1.45rem', paddingBottom: '1.2rem' }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    minHeight: '75vh',
    h2: {
      fontSize: '2.5rem',
      textAlign: 'left',
      paddingBottom: '1.2rem'
    },
    h3: { fontSize: '1.45rem' }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    minHeight: '70vh',
    h2: {
      fontSize: '2.8rem',
      paddingBottom: '1.2rem'
    },
    h3: { fontSize: '2rem' }
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: '65vh',
    h2: {
      fontSize: '3.5rem',
      paddingBottom: '1.2rem'
    },
    h3: { fontSize: '2.5rem' }
  },
}));

const SubtitleBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    span: {
      fontSize: '1.5rem',
      textAlign: 'center',
      lineHeight: 1.35

    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    span: {
      fontSize: '2rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    span: {
      fontSize: '2.5rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.up('lg')]: {
    span: {
      fontSize: '3rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  }
}));

const ItemsBox = styled('div')(({ theme }) => ({
  marginTop: '10rem',
}));

const Header = () => {
  return (
    <>
      <Topbar />
      <MenuBox
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          overflow: 'hidden'
        }}
      >
        <Grid container
          id="header"
          sx={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
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
              marginTop: '9rem'
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
                  color: "#0D3475",
                  fontSize: '1rem'
                }}
              >
                @kampanos 2021
              </Typography>
            </Grid>

            <ItemsBox>
              <Grid container sx={{ justifyContent: 'center', minHeight: 'max-content' }}>
                <Typography
                  sx={{
                    margin: 0,
                    height: 'fit-content'
                  }}
                  color=" #0D3475"
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
                  color=" #0D3475"
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
                  color=" #0D3475"
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
            lg={10}
            >

            {/* Menu */}
            <Grid container
              spacing={0}
              xs={12}
              sm={12}
              md={10}
              lg={9}
              direction="row"
              sx={{
                alignContent: 'center',
                justifyContent: "center",
                alignItems: "center",
                marginBottom: '2rem'
              }}
            >
              <Grid item
                sx={{
                  padding: 0,
                  margin: 0,
                  backgroundColor: '#fff',
                  textAlign: 'center'
                }}
              >
               <Button href="http://www.kampanos.pt/">
                <img src={centerLogo} alt="KampanosLogo" title="KampanosLogo" />
              </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MenuBox>

      <SubtitleBox
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='right' />
        <Subtitle color='#D46918' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='left' />
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='right' />
      </SubtitleBox>
    </>
  )
}
export default Header
