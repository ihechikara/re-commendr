import React, { useContext } from "react";
import { RecommendrAssesmentContext } from "../AssessmentContext";
import LoadingBox from "../common/LoadingBox";

const RecommededRoadmap = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const paragraphs = quizContext?.result ? quizContext.result.split("\n") : "";

  console.log(typeof quizContext?.result);
  return (
    <>
      {quizContext?.loading ? (
        <LoadingBox />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: "#f6f6f6",
              color: "#30292f",
              padding: "72px",
              width: "930px",
            }}
          >
            <div style={{ fontWeight: 500 }}>
              <p style={{ fontSize: "24px", marginBottom: "32px" }}>
                Recommended Roadmap
              </p>
              {paragraphs.map((paragraph: any, index: any) => (
                <p
                  key={index}
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "30px",
                    marginBottom: "5px",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommededRoadmap;
