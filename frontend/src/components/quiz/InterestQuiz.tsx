import { useState, useContext } from "react";
import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { RecommendrAssesmentContext } from "../../AssessmentContext";

const programmingDomains = [
  { domain: "Artificial intelligence" },
  { domain: "Backend Development" },
  { domain: "Frontend Development" },
  { domain: "Fullstack Development" },
  { domain: "Game Development" },
  { domain: "Mobile development" },
  { domain: "Machine Learning" },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const InterestQuiz = () => {
  const quizContext = useContext(RecommendrAssesmentContext);
  const [personName, setPersonName] = useState<string[]>([]);
  const [domain, setDomain] = useState<{ domain: string }[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
            Interests{" "}
          </Typography>
          <Typography
            component="p"
            sx={{
              alignSelf: "stretch",
              linHeight: "30px",
              fontSize: "16px",
            }}
          >
            Set your interested field in computer programming to get a tailored
            roadmap and resources
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
            Desired programming domain
          </Typography>

          <Typography
            component="p"
            sx={{
              lineHeight: "30px",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Specific programming skills or domains the user intends to master
          </Typography>
        </Box>
      </Box>
      <FormControl sx={{ m: 1 }}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={programmingDomains}
          disableCloseOnSelect
          getOptionLabel={(option) => option.domain}
          onChange={(event, values) => {
            setDomain(values);
            quizContext?.setUserData({
              ...quizContext?.userData,
              domain: values.map((option) => option.domain),
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
              {option.domain}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              // InputLabelProps={{ shrink: false }}
              label="Select a domain of your choice"
            />
          )}
        />
      </FormControl>
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
          disabled={domain.length === 0}
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

export default InterestQuiz;
