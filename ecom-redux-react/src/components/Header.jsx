import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "inherit",
      fontWeight: "600",
      fontSize: "2rem",
    },
  },
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 2,
            width: 400,
            height: 60,
            margin: ".5rem auto auto 2rem",
          }}
          theme={theme}
        >
          Dummy Shop
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Header;
