import { styled } from "@mui/system";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode,
  onClick?: () => void,
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  }))

  return (
    <>
      <StyledButton onClick={onClick}>{ children }</StyledButton>
    </>
  )
}

export default StyledButton
