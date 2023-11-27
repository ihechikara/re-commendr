import { Box, Button,  Typography } from "@mui/material";

const SignIn = () => {
  return (
    <Box sx={{ height: "calc(100vh - 90px)", width: "100vw" }}>
      <Box
        sx={{
          mt: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            color: "#30292F",
            mb: "16px",
            width: "936px",
          }}
        >
          Are you set to begin your programming{" "}
          <span style={{ color: "#3B28CC" }}>journey?</span>
        </Typography>
        <Typography
          component="p"
          sx={{
            width: "742px",
            color: "#000",
            lineHeight: "30px",
            mb: "48px",
          }}
        >
          Re-commendr uses an algorithm to generate a roadmap based on your
          abilities and needs.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F87060",
              padding: "24px 48px",
              color: "white",
              textTransform: "capitalize",
              fontSize: "24px",
              fontWeight: "500",
              mb: "8px",
            }}
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid #3B28CC",
              padding: "24px 48px",
              color: "#3B28CC",
              textTransform: "capitalize",
              fontSize: "24px",
              fontWeight: "500",
              mb: "8px",
            }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
