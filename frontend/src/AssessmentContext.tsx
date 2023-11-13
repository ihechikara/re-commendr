// AssessmentContext.js
import React, { useEffect, useState, ReactNode } from "react";

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

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    const savedCurrentPage = localStorage.getItem("currentPage");

    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }

    if (savedCurrentPage) {
      setCurrentPage(JSON.parse(savedCurrentPage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [userData, currentPage]);

  const submitData = async () => {
    setFinalData((finalData: any) => [...finalData, userData]);
    console.log(finalData, userData);
    try {
      const response = await fetch("http://localhost:3000/createReco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }

    localStorage.removeItem("userData");
    localStorage.removeItem("finalData");
    localStorage.removeItem("currentPage");
    setUserData([]);
    setCurrentPage(0);
  };

  // Call the function to make the POST request

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
