// App.js
import React from "react";
import { RecommendrAssesmentProvider } from "./AssessmentContext";
import { Box } from "@mui/material";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Discaimer from "./components/Discaimer";
import QuizTabs from "./components/QuizTabs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <RecommendrAssesmentProvider>
      <Box sx={{ backgroundColor: "#ffffff", overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/disclaimer" element={<Discaimer />} />
          <Route path="/quiz" element={<QuizTabs />} />
        </Routes>
      </Box>
    </RecommendrAssesmentProvider>
  );
}

export default App;
