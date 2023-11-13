import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const HowItWorks = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClose = () => {
    setShow(false);
  };
  return (
    <Box
      sx={{
        width: "392px",
        height: "433px",
        position: "absolute",
        left: "813px",
        borderRadius: "10px",
        top: "10%",
        gap: "32px",
        padding: "48px 32px",
        backgroundColor: "#f1efef",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "normal",
            color: "#F87060",
          }}
        >
          How it works
        </p>
        <CloseIcon onClick={onClose} />
      </Box>
      <ul
        style={{
          fontSize: "16px",
          color: "#30292F",
          lineHeight: "30px",
          fontWeight: "400",
          paddingLeft: "25px",
        }}
      >
        <li>Sign in to re-commendr and click on “Try re-commendr”.</li>
        <li>
          Engage in the short multi-choice quiz (This helps the system build
          your user profile).
        </li>
        <li>Get a recommended roadmap and resources to achieve your goal.</li>
      </ul>
    </Box>
  );
};

export default HowItWorks;
