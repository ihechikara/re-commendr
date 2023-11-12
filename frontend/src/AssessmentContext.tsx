// AssessmentContext.js
import React, { createContext, useState, ReactNode } from "react";

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

  const submitData = () => {
    setFinalData((finalData: any) => [...finalData, userData]);
    console.log(finalData, userData);
    // setUserData("");
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
