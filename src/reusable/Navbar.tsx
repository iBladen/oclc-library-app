import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export type Link = {
  label: string;
  path: string;
};

type NavbarProps = {
  links: Link[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        {links.map((link) => (
          <MenuItem key={link.label}>
            <Typography textAlign="center">
              <Button
                component={NavLink}
                to={link.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {link.label}
              </Button>
            </Typography>
          </MenuItem>
        ))}
        {/* <MenuItem key={"Home"}>
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
        </MenuItem> */}
      </Toolbar>
    </AppBar>
  );
}
