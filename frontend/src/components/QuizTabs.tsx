import {  useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TechnicalAssessmentQuiz from "./quiz/TechnicalAssessmentQuiz";
import PriorProgrammingQuiz from "./quiz/PriorProgrammingQuiz";
import InterestQuiz from "./quiz/InterestQuiz";
import LearningObjectives from "./quiz/LearningObjectives";
import LearningStyle from "./quiz/LearningStyle";
import IntendedProject from "./quiz/IntendedProject";
import TimeAvailability from "./quiz/TimeAvailability";
import { RecommendrAssesmentContext } from "../AssessmentContext";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function QuizTabs() {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    quizContext?.setCurrentPage(newValue); // update the current page in your context
  };

  const quizContext = useContext(RecommendrAssesmentContext);

  return (
    <Box>
      <Box
        sx={{
          mt: "120px",
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          px: "160px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {" "}
          <Tabs
            orientation="vertical"
            variant="standard"
            value={quizContext?.currentPage}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 0,
              borderColor: "divider",
              ".MuiTabs-indicator": {
                left: 0,
                border: "2px solid #F87060",
              },
              ".Mui-selected": {
                color: "#30292F !important",
              },
              ".MuiTab-root": {
                textTransform: "capitalize",
                fontSize: "16px",
                lineHeight: "30px",
                fontWeight: "400",
                padding: "16px 24px",
                alignItems: "start",
                width: "288px",
                color: "#D7CFD6",
              },
            }}
          >
            <Tab label="Technical Assessment" {...a11yProps(0)} />
            <Tab label="Prior programming experience" {...a11yProps(1)} />
            <Tab label="Interests" {...a11yProps(2)} />
            <Tab label="Learning objectives" {...a11yProps(3)} />
            <Tab label="Learning style" {...a11yProps(4)} />
            <Tab label="Intended project [Optional]" {...a11yProps(5)} />
            <Tab label="Time Availability" {...a11yProps(6)} />
          </Tabs>
        </div>
        <TabPanel value={quizContext?.currentPage} index={0}>
          <TechnicalAssessmentQuiz />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={1}>
          <PriorProgrammingQuiz />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={2}>
          <InterestQuiz />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={3}>
          <LearningObjectives />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={4}>
          <LearningStyle />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={5}>
          <IntendedProject />
        </TabPanel>
        <TabPanel value={quizContext?.currentPage} index={6}>
          <TimeAvailability />
        </TabPanel>
      </Box>
    </Box>
  );
}
