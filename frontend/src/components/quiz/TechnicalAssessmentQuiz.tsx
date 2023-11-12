import { useContext, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const TechnicalAssessmentQuiz = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  console.log(quizContext?.userData);
  if (quizContext) {
    console.log(quizContext.userData, "user data");
  }
  const [algorithmicThinking, setAlgorithmicThinking] = useState("");
  const [logicalThinking, setLogicalThinking] = useState("");
  const [mathematicalReasoning, setMathematicalReasoning] = useState("");

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: "500", mb: "8px" }}
        >
          Technical Assessment
        </Typography>
        <Typography
          component="p"
          sx={{
            alignSelf: "stretch",
            linHeight: "30px",
            fontSize: "16px",
          }}
        >
          Answer the following questions to enable the system assess your
          technical skills and build your user profile.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", lineHeight: "30px", fontSize: "16px" }}
        >
          Algorithmic thinking
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#D7CFD6", lineHeight: "30px", fontSize: "16px" }}
        >
          Algorithmic thinking is the ability to solve problems and make
          decisions by breaking them down into a series of clear and logical
          steps.
        </Typography>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
              mb: "24px",
            }}
          >
            How good are your algorithm skills on a scale of 1 -5?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
            }}
            value={quizContext?.userData["algorithmicThinking"]}
            onChange={(e) => {
              setAlgorithmicThinking(e.target.value);
              quizContext?.setUserData({
                ...quizContext?.userData,
                algorithmicThinking: e.target.value,
              });
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                value="1 - Very weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="1 - Very weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="3 - Average"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="3 - Average"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="5 - Expert"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="5 - Expert"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <FormControlLabel
                value="2 - Weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="2 - Weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="4 - Strong"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="4 - Strong"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", lineHeight: "30px", fontSize: "16px" }}
        >
          Logical thinking
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#D7CFD6", lineHeight: "30px", fontSize: "16px" }}
        >
          This involves the ability to analyze problems, break them down into
          smaller steps, and devise logical solutions. Programmers use if-then
          logic to create functional code.
        </Typography>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
              mb: "24px",
            }}
          >
            What is your experience in logical thinking on a scale of 1 -5?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
            }}
            value={quizContext?.userData["logicalThinking"]}
            onChange={(e) => {
              setLogicalThinking(e.target.value);
              quizContext?.setUserData({
                ...quizContext?.userData,
                logicalThinking: e.target.value,
              });
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                value="1 - Very weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="1 - Very weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="3 - Average"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="3 - Average"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="5 - Expert"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="5 - Expert"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <FormControlLabel
                value="2 - Weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="2 - Weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="4 - Strong"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="4 - Strong"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", lineHeight: "30px", fontSize: "16px" }}
        >
          Mathematical reasoning
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#D7CFD6", lineHeight: "30px", fontSize: "16px" }}
        >
          While not all programming requires advanced math, mathematical
          reasoning is valuable in certain domains, such as data science,
          machine learning, and game development.
        </Typography>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
              mb: "24px",
            }}
          >
            How good is your mathematical reasoning on a scale of 1 -5?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
            }}
            value={quizContext?.userData["mathematicalReasoning"]}
            onChange={(e) => {
              setMathematicalReasoning(e.target.value);
              quizContext?.setUserData({
                ...quizContext?.userData,
                mathematicalReasoning: e.target.value,
              });
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                value="1 - Very weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="1 - Very weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="3 - Average"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="3 - Average"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="5 - Expert"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="5 - Expert"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <FormControlLabel
                value="2 - Weak"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="2 - Weak"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="4 - Strong"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="4 - Strong"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
          disabled={
            !algorithmicThinking || !logicalThinking || !mathematicalReasoning
          }
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

export default TechnicalAssessmentQuiz;
