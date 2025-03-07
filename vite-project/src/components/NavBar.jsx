import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ResponsiveAppBar() {
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const [anchorElPricing, setAnchorElPricing] = React.useState(null);
  const [anchorElBlog, setAnchorElBlog] = React.useState(null);

  const handleOpenMenu = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleCloseMenu = (setAnchor) => {
    setAnchor(null);
  };

  return (
<AppBar sx={{ backgroundColor: "white", position: "relative", zIndex: 10, boxShadow: "none" }}>
<Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            color: "black",
            textDecoration: "none",
          }}
        >
          codementor
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={(event) => handleOpenMenu(event, setAnchorElProducts)}
            sx={{ my: 2, color: "black" }}
          >
            Mentorship <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={anchorElProducts}
            open={Boolean(anchorElProducts)}
            onClose={() => handleCloseMenu(setAnchorElProducts)}
          >
            <MenuItem onClick={() => handleCloseMenu(setAnchorElProducts)}>
              Product 1
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElProducts)}>
              Product 2
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElProducts)}>
              Product 3
            </MenuItem>
          </Menu>

          <Button
            onClick={(event) => handleOpenMenu(event, setAnchorElPricing)}
            sx={{ my: 2, color: "black" }}
          >
            Extra help <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={anchorElPricing}
            open={Boolean(anchorElPricing)}
            onClose={() => handleCloseMenu(setAnchorElPricing)}
          >
            <MenuItem onClick={() => handleCloseMenu(setAnchorElPricing)}>
              Basic
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElPricing)}>
              Premium
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElPricing)}>
              Enterprise
            </MenuItem>
          </Menu>

          <Button
            onClick={(event) => handleOpenMenu(event, setAnchorElBlog)}
            sx={{ my: 2, color: "black" }}
          >
            Freelancing <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={anchorElBlog}
            open={Boolean(anchorElBlog)}
            onClose={() => handleCloseMenu(setAnchorElBlog)}
          >
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Latest Posts
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Categories
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Archives
            </MenuItem>
          </Menu>

          <Button
            onClick={(event) => handleOpenMenu(event, setAnchorElBlog)}
            sx={{ my: 2, color: "black" }}
          >
            More <ArrowDropDownIcon />
          </Button>
          <Menu
            anchorEl={anchorElBlog}
            open={Boolean(anchorElBlog)}
            onClose={() => handleCloseMenu(setAnchorElBlog)}
          >
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Latest Posts
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Categories
            </MenuItem>
            <MenuItem onClick={() => handleCloseMenu(setAnchorElBlog)}>
              Archives
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
          <Button sx={{ color: "black" }}>Become a Mentor</Button>
          <Button sx={{ color: "black" }}>Login</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white" }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;