import { useContext,useState } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const learningObj = [
  "Understand Programming Fundamentals",
  "Master a Programming Language",
  "Learn Problem-Solving Skills",
  "Practice Code Efficiency",
  "Acquire Debugging Skills",
  "Learn Version Control",
  "Database Basics",
  "Understand Software Development Life Cycle",
  "Clean Code Practices",
  "Data Structures and Algorithms",
  "Learn about Testing and Quality Assurance",
  "Practice problem Decomposition",
];

const LearningObjectives = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>(
    quizContext?.userData?.learningObjectives || []
  );

  const handleButtonClick = (objective: string) => {
    setSelectedObjectives((prevObjectives) =>
      prevObjectives.includes(objective)
        ? prevObjectives.filter((obj) => obj !== objective)
        : [...prevObjectives, objective]
    );

    quizContext?.setUserData({
      ...quizContext?.userData,
      learningObjectives: selectedObjectives.includes(objective)
        ? selectedObjectives.filter((obj) => obj !== objective)
        : [...selectedObjectives, objective],
    });
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
            Learning Objectives
          </Typography>
          <Typography
            component="p"
            sx={{
              alignSelf: "stretch",
              linHeight: "30px",
              fontSize: "16px",
            }}
          >
            Outcomes you hope to achieve through the learning process.
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
            What are your long term goals as relates to computer programming?
          </Typography>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "646px",
              gap: "16px",
            }}
          >
            {learningObj.map((i, m) => (
              <Button
                style={{
                  padding: "12px 16px",
                  backgroundColor: selectedObjectives.includes(i)
                    ? "#817a81"
                    : "#D7CFD6",
                  color: "#30292F",
                  borderRadius: "50px",
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
          disabled={selectedObjectives.length === 0}
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

export default LearningObjectives;
