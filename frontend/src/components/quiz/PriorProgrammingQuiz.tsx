import { useContext, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const languages = [
  { language: "JavaScript" },
  { language: "Java" },
  { language: "Python" },
];

const PriorProgrammingQuiz = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const [programmingExperienceLevel, setProgrammingExperienceLevel] =
    useState<string>(quizContext?.userData?.programmingExperienceLevel || "");

  const [programmingLanguages, setProgrammingLanguages] = useState<
    { language: string }[]
  >([]);
  console.log(quizContext?.userData);
  if (quizContext) {
    console.log(quizContext.userData, "user data");
  }

  useEffect(() => {
    if (quizContext?.userData?.programmingLanguages) {
      const selectedLanguages = languages.filter((language) =>
        quizContext?.userData?.programmingLanguages.includes(language.language)
      );
      setProgrammingLanguages(selectedLanguages);
    }
  }, [languages]);
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
            Prior Programming Experience{" "}
          </Typography>
          <Typography
            component="p"
            sx={{
              alignSelf: "stretch",
              linHeight: "30px",
              fontSize: "16px",
            }}
          >
            Here, you can share your programming experience if you have any.
            This helps the system with the recommendations.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              lineHeight: "30px",
              fontSize: "16px",
              mt: "32px",
            }}
          >
            Programming experience level{" "}
          </Typography>

          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "400",
                mb: "24px",
              }}
            >
              What is your prior level of experience in programming?{" "}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="Total Beginner"
              name="radio-buttons-group"
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "80px",
              }}
              value={programmingExperienceLevel}
              onChange={(e) => {
                setProgrammingExperienceLevel(e.target.value);
                quizContext?.setUserData({
                  ...quizContext?.userData,
                  programmingExperienceLevel: e.target.value,
                });
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  value="Total Beginner"
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#30292f",
                        },
                      }}
                    />
                  }
                  label="Total Beginner"
                  sx={{ width: "272px", py: "12px" }}
                />
                <FormControlLabel
                  value="Intermediate"
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#30292f",
                        },
                      }}
                    />
                  }
                  label="Intermediate"
                  sx={{ width: "272px", py: "12px" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  value="Amateur"
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#30292f",
                        },
                      }}
                    />
                  }
                  label="Amateur"
                  sx={{ width: "272px", py: "12px" }}
                />
                <FormControlLabel
                  value="Expert"
                  control={
                    <Radio
                      sx={{
                        "&, &.Mui-checked": {
                          color: "#30292f",
                        },
                      }}
                    />
                  }
                  label="Expert"
                  sx={{ width: "272px", py: "12px" }}
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            lineHeight: "30px",
            fontSize: "16px",
          }}
        >
          Familiar programming languages and frameworks
        </Typography>
        <Typography
          sx={{
            lineHeight: "30px",
            fontSize: "16px",
            fontWeight: "400",
            marginBottom: "24px",
          }}
        >
          Add programming languages and frameworks you are proficient at.
        </Typography>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={languages}
          disableCloseOnSelect
          getOptionLabel={(option) => option.language}
          value={programmingLanguages}
          onChange={(event, values) => {
            setProgrammingLanguages(values);
            quizContext?.setUserData({
              ...quizContext?.userData,
              programmingLanguages: values.map((option) => option.language),
            });
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.language}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              // InputLabelProps={{ shrink: false }}
              label="Search programming languages and frameworks"
            />
          )}
        />
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
          disabled={
            !programmingExperienceLevel || programmingLanguages.length === 0
          }
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

export default PriorProgrammingQuiz;
