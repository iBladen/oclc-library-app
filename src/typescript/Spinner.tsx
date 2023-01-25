import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100px",
        width: "100px",
        top: "50%",
        left: "50%",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
}
