import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Discaimer = () => {
  return (
    <Box sx={{ height: "calc(100vh - 90px)", width: "100vw" }}>
      
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
            color: "#3B28CC",
          }}
        >
          Disclaimer
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
          The level of Accuracy of the recommender depends on how precise your
          user profile is. Therefeore, be honest as possible in answering the
          questions
        </Typography>
        <Link
          to="/quiz"
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
          Start Quiz
        </Link>
      </Box>
    </Box>
  );
};

export default Discaimer;
