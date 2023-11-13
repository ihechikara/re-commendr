import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/re-commendr.svg";
import { useState } from "react";
import HowItWorks from "../components/HowItWorks";

const LinkStyles = {
  padding: "12px 24px",
  color: "#30292F",
  textDecoration: "none",
  cursor: "pointer",
};

const Header = () => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };
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
        <a style={LinkStyles} onClick={onShow}>
          How it works
        </a>
        {show && <HowItWorks setShow={setShow} />}
        <Link to="/disclaimer" style={LinkStyles}>
          Start recommender
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
