import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem key={"Home"}>
          <Typography textAlign="center">
            <Button
              component={NavLink}
              to="/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
          </Typography>
        </MenuItem>
        <MenuItem key={"AddBook"}>
          <Typography textAlign="center">
            <Button
              component={NavLink}
              to="/manage-book"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Add Book
            </Button>
          </Typography>
        </MenuItem>
        <MenuItem key={"About"}>
          <Typography textAlign="center">
            <Button
              component={NavLink}
              to="/about"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
