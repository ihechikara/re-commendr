import { useContext, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const TimeAvailability = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const [availability, setAvailability] = useState<string>(
    quizContext?.userData?.availability || ""
  );
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: "24px", fontWeight: "500", mb: "8px" }}
        >
          Time Availability
        </Typography>
        <Typography
          component="p"
          sx={{
            alignSelf: "stretch",
            linHeight: "30px",
            fontSize: "16px",
          }}
        >
          How much time can you dedicate to learning programming each week? This
          information assists in creating a realistic and achievable curriculum.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", lineHeight: "30px", fontSize: "16px" }}
        >
          Weekly time commitment
        </Typography>

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "80px",
            }}
            value={availability}
            onChange={(e) => {
              setAvailability(e.target.value);
              quizContext?.setUserData({
                ...quizContext?.userData,
                availability: e.target.value,
              });
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                value="5 - 10 hrs/Week"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="5 - 10 hrs/Week"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="16 - 25 hrs/Week"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="16 - 25 hrs/Week"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <FormControlLabel
                value="11 - 15 hrs/Week"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="11 - 15 hrs/Week"
                sx={{ width: "272px", py: "12px" }}
              />
              <FormControlLabel
                value="25hrs+/Week"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#30292f",
                      },
                    }}
                  />
                }
                label="25hrs+/Week"
                sx={{ width: "272px", py: "12px" }}
              />
            </Box>
          </RadioGroup>
        </FormControl>
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
          onClick={quizContext?.submitData}
        >
          Generate recommendation
        </Button>
      </Box>
    </Box>
  );
};

export default TimeAvailability;
