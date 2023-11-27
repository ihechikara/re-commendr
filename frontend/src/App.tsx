// App.js
import {
  RecommendrAssesmentProvider,
} from "./AssessmentContext";
import { Box } from "@mui/material";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Discaimer from "./components/Discaimer";
import QuizTabs from "./components/QuizTabs";
import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import RecommededRoadmap from "./components/RecommededRoadmap";

function App() {

  return (
    <RecommendrAssesmentProvider>
      <Header />
      <Box sx={{ backgroundColor: "#ffffff", overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/disclaimer" element={<Discaimer />} />
          <Route path="/quiz" element={<QuizTabs />} />
          <Route path="/recommendation" element={<RecommededRoadmap/>} />
        </Routes>
      </Box>
    </RecommendrAssesmentProvider>
  );
}

export default App;
