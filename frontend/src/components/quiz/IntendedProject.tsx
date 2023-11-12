import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const IntendedProject = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "836px",
        px: "95px",
        gap: "32px",
        color: "#30292F",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "24px", fontWeight: "500", mb: "8px" }}
          >
            Intended Project
          </Typography>
          <Typography
            component="p"
            sx={{
              alignSelf: "stretch",
              linHeight: "30px",
              fontSize: "16px",
            }}
          >
            Optional: If you have any project in mind to build, the system could
            tailor recommendations to assist your specific interest.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            component="p"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
              marginTop: "32px",
              marginBottom: "24px",
            }}
          >
            Briefly describe the project you have in mind
          </Typography>
        </Box>
        <Box sx={{}}>
          <TextField
            fullWidth
            label="Ex: A scheduling app for cafeteria meals"
            id="fullWidth"
            onChange={(e) =>
              quizContext?.setUserData({
                ...quizContext.userData,
                intendedProject: e.target.value,
              })
            }
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            backgroundColor: "transparent",
            padding: "12px 32px",
            color: "#30292F",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "30px",
            gap: "16px",
          }}
          onClick={() => {
            quizContext?.setCurrentPage(quizContext?.currentPage + 1);
          }}
        >
          Skip
        </Button>
        <Button
          sx={{
            backgroundColor: "#F87060",
            padding: "12px 32px",
            color: "white",
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "30px",
          }}
          onClick={() => {
            quizContext?.setCurrentPage(quizContext?.currentPage + 1);
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default IntendedProject;
