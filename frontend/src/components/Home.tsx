import { Box, Button, Typography } from "@mui/material";
import Header from "../common/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [start, setStart] = useState(false);
  const startRecommedrHandler = () => {
    setStart(true);
  };
  return (
    <Box sx={{ height: "calc(100vh - 90px)", width: "100vw" }}>
      <Header />
      <Box
        sx={{
          mt: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            color: "#30292F",
            mb: "16px",
          }}
        >
          Welcome to re-commendr
        </Typography>
        <Typography
          component="p"
          sx={{
            width: "742px",
            color: "#000",
            lineHeight: "30px",
            mb: "48px",
          }}
        >
          Re-commendr generates a highly personalized roadmap and curriculum,
          recommending specific resources, courses, and projects that align with
          the user's aspirations.
        </Typography>
        <Link
          to="/disclaimer"
          style={{
            backgroundColor: "#F87060",
            padding: "24px 48px",
            color: "white",
            textTransform: "capitalize",
            fontSize: "24px",
            fontWeight: "500",
            marginBottom: "8px",
            textDecoration: "none",
          }}
        >
          Start re-commedr now
        </Link>
        <Button
          variant="text"
          sx={{
            color: "#3B28CC",
            padding: "24px 32px",
            textTransform: "capitalize",
            fontSize: "16px",
            lineHeight: "30px",
            fontWeight: "400",
          }}
        >
          How does it work?
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
