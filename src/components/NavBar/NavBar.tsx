import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
  }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skill</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  )
}

export default NavBar
