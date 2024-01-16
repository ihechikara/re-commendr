import React, { useState, ReactNode } from "react";

export interface IRecommendrAssesmentContext {
  userData: any;
  setUserData: any;
  finalData: any;
  setFinalData: any;
  currentPage: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  submitData: any;
  loading: any;
  setLoading: any;
  result: any;
  setResult: any;
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
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const user_text = {
    user_text: `Generate a detailed learning roadmap for a user with ${userData.algorithmicThinking} algorithmic thinking, ${userData.logicalThinking} logical thinking, and ${userData.mathematicalReasoning} mathematical reasoning, and is a ${userData.programmingExperienceLevel} to programming. The user wants to learn ${userData.programmingLanguages} with these learning objectives: ${userData.learningObjectives}. The user intends to learn with ${userData.learningPace} and prefers ${userData.learningContent}, and intends to build a ${userData.intendedProject}. The user’s availability to learn ${userData.availability}. Break down your respnse into 12 weeks and also include resources for each week`,
  };

  const submitData = async () => {
    // setFinalData((finalData: any) => [...finalData, userData]);
    setLoading(true);
    console.log(user_text, userData);
    try {
      const response = await fetch("http://localhost:5000/api/recommend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_text),
      });
      setUserData({});
      const responseData = await response.json();
      setResult(responseData);
      console.log(responseData, "response_data");
      setLoading(false);
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
        loading,
        setLoading,
        result,
        setResult,
      }}
    >
      {children}
    </RecommendrAssesmentContext.Provider>
  );
};
