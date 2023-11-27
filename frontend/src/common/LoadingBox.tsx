import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
const LoadingBox = () => {
  return (
    <div style={{}}>
      <Stack
        sx={{
          color: "grey.500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 90px)",
          flex: 1,
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="inherit" size={100} />
      </Stack>
    </div>
  );
};

export default LoadingBox;
