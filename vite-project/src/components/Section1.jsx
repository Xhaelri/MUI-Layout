import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import hero from "../assets/hero-l.png";

export default function BoxBasic() {
  return (
    <Box
      sx={{
        backgroundColor: "#006080",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "85vh", 
        textAlign: "center",
        py: 8,

      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, color: "white", fontWeight: 600 }}
      >
        Find a developer for <br /> live mentorship & freelance projects
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff6b54", color: "white", py: 2, px: 4, mb: 3 }}
      >
        Get Help Now
      </Button>
      <img
        src={hero}
        alt="Placeholder"
        style={{ width: "50%", maxWidth: "100%" ,zIndex: 1}}
      />
    </Box>
  );
}
