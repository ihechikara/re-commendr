import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/re-commendr.svg";

const LinkStyles = {
  padding: "12px 24px",
  color: "#30292F",
  textDecoration: "none",
};

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        gap: "316px",
      }}
    >
      <Box component="img" alt="" src={logo}></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Link to="/" style={LinkStyles}>
          Home
        </Link>
        <Link to="/" style={LinkStyles}>
          How it works
        </Link>
        <Link to="/disclaimer" style={LinkStyles}>
          Start recommender
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
