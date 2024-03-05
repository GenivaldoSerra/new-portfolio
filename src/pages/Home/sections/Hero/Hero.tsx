import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Bolotinha from '../../../../assets/images/bolotinha.jpg'
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButtons/StyledButtons";
import { AnimatedBack } from "../../../../components/Animated/AnimatedBack";

const Hero = () => {

  const StyleHero = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }))

  const StyleImg = styled('img')(({ theme }) => ({
    width: '80%',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }))

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={0}>
                  <AnimatedBack />
                </Box>
                <Box position="relative">
                  <StyleImg src={Bolotinha}/>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">Bolotinha</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">Data Engineer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon />
                      <Typography>
                        Download CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <AlternateEmailIcon />
                      <Typography>
                        Contact me
                      </Typography>
                  </StyledButton>
                </Grid>  
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>
    </>
  )
}

export default Hero