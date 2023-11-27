// AssessmentContext.js
import React, { useState, ReactNode } from "react";

export interface IRecommendrAssesmentContext {
  userData: any;
  setUserData: any;
  finalData: any;
  setFinalData: any;
  currentPage: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  submitData: any;
}

export const RecommendrAssesmentContext =
  React.createContext<IRecommendrAssesmentContext | null>(null);

type AssessmentContextProps = {
  children: ReactNode;
};

export const RecommendrAssesmentProvider = ({
  children,
}: AssessmentContextProps) => {
  const [userData, setUserData] = useState<any>([]);
  const [finalData, setFinalData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const user_text = {
    user_text: `Generate a detailed learning roadmap for a user with ${userData.algorithmicThinking} algorithmic thinking, ${userData.logicalThinking} logical thinking, and ${userData.mathematicalReasoning} mathematical reasoning, and is a ${userData.programmingExperienceLevel} to programming. The user wants to learn ${userData.programmingLanguages} with these learning objectives: ${userData.learningObjectives}. The user intends to learn with ${userData.learningPace} and prefers ${userData.learningContent}, and intends to build a ${userData.intendedProject}. The user’s availability to learn ${userData.availability}.`,
  };


  const submitData = async () => {
    // setFinalData((finalData: any) => [...finalData, userData]);
    console.log(user_text, userData);
    try {
      const response = await fetch("http://localhost:3000/api/recommend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTFkNTdlNGQzMTQ0MGQxMjkzOTMiLCJpYXQiOjE3MDAzMzYzNjEsImV4cCI6MTcwMDU5NTU2MX0.45TVYG5kS0a-RElnSGenlvL48huc0O0vaTqxEyqsyvk`,
        },
        body: JSON.stringify(user_text),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <RecommendrAssesmentContext.Provider
      value={{
        userData,
        setUserData,
        finalData,
        setFinalData,
        currentPage,
        setCurrentPage,
        submitData,
      }}
    >
      {children}
    </RecommendrAssesmentContext.Provider>
  );
};
