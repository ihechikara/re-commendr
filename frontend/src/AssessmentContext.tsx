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
    user_text: `Generate a detailed learning roadmap for a user with ${userData.algorithmicThinking} algorithmic thinking, ${userData.logicalThinking} logical thinking, and ${userData.mathematicalReasoning} mathematical reasoning, and is a ${userData.programmingExperienceLevel} to programming. The user wants to learn ${userData.programmingLanguages} with these learning objectives: ${userData.learningObjectives}. The user intends to learn with ${userData.learningPace} and prefers ${userData.learningContent}, and intends to build a ${userData.intendedProject}. The user’s availability to learn ${userData.availability}. Add some learning resources as well to the roadmap`,
  };

  // useEffect(() => {
  //   const savedUserData = localStorage.getItem("userData");
  //   const savedCurrentPage = localStorage.getItem("currentPage");

  //   if (savedUserData) {
  //     setUserData(JSON.parse(savedUserData));
  //   }

  //   if (savedCurrentPage) {
  //     setCurrentPage(JSON.parse(savedCurrentPage));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(userData));
  //   localStorage.setItem("currentPage", JSON.stringify(currentPage));
  // }, [userData, currentPage]);

  const submitData = async () => {
    // setFinalData((finalData: any) => [...finalData, userData]);
    console.log(user_text, userData);
    try {
      const response = await fetch("http://localhost:3000/createReco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMTFkNTdlNGQzMTQ0MGQxMjkzOTMiLCJpYXQiOjE2OTk5MDA1MjMsImV4cCI6MTcwMDE1OTcyM30.L11rP2ek68ifdSANIJcX8ZjLfKFIOldLhOMMYuu3e7s`,
        },
        body: JSON.stringify(user_text),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }

    // localStorage.removeItem("userData");
    // localStorage.removeItem("finalData");
    // localStorage.removeItem("currentPage");
    // setUserData([]);
    // setCurrentPage(0);
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
