import { useState, useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const learningContent = ["Self-Paced Learning", "Structured Courses"];

const learningStyle = [
  "Video tutorials",
  "Online courses",
  "Interactive coding exercise",
  "Books and articles",
];

const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: "400px",
      width: "646px",
    },
  },
};

const LearningStyle = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const [learningContent, setLearningContent] = useState<string[]>([]);
  const [learningPace, setLearningPace] = useState<string | null>(null);

  const handleLearningPaceChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setLearningPace(selectedValue);
    quizContext?.setUserData((prevUserData: any) => ({
      ...prevUserData,
      learningPace: selectedValue,
    }));
  };

  const handleButtonClick = (objective: string) => {
    setLearningContent((prevObjectives) =>
      prevObjectives.includes(objective)
        ? prevObjectives.filter((obj) => obj !== objective)
        : [...prevObjectives, objective]
    );

    quizContext?.setUserData((prevUserData: any) => ({
      ...prevUserData,
      learningContent: learningContent,
    }));
  };

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
            Learning Style
          </Typography>
          <Typography
            component="p"
            sx={{
              alignSelf: "stretch",
              linHeight: "30px",
              fontSize: "16px",
            }}
          >
            Choose how you prefer to learn
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              lineHeight: "30px",
              fontSize: "16px",
              mt: "32px",
            }}
          >
            Learning pace
          </Typography>

          <Typography
            component="p"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Select the pace of learning, whether self-paced learning or
            structured courses.{" "}
          </Typography>
        </Box>
      </Box>
      <FormControl>
        <InputLabel id="demo-multiple-chip-label">
          Select learning pace
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={handleLearningPaceChange}
        >
          <MenuItem value={"Self-Paced Learning"}>Self-Paced Learning</MenuItem>
          <MenuItem value={"Structured Courses"}>Structured Courses</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            lineHeight: "30px",
            fontSize: "16px",
            mt: "32px",
          }}
        >
          Learning content
        </Typography>

        <Typography
          component="p"
          sx={{
            lineHeight: "30px",
            fontSize: "16px",
            fontWeight: "400",
            marginBottom: "24px",
          }}
        >
          Select the type of learning content you prefer
        </Typography>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "646px",
            gap: "16px",
          }}
        >
          {learningStyle.map((i, m) => (
            <Button
              style={{
                padding: "12px 16px",
                color: "#30292F",
                borderRadius: "50px",
                backgroundColor: learningContent.includes(i)
                  ? "black"
                  : "#D7CFD6",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "400",
              }}
              onClick={() => handleButtonClick(i)}
            >
              {i}
            </Button>
          ))}
        </Box>
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
          disabled={!learningPace || learningContent.length === 0}
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

export default LearningStyle;
