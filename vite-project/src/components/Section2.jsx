import * as React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import img1 from "../assets/mentorship.jpg";
import img2 from "../assets/freelance-job.png";
import join from "../assets/img3.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Section2() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        pt: 20,
        position: "relative",
        top: "-200px",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{ color: "black", fontWeight: 400, textAlign: "center", mb: 4 }}
        >
          Get help from vetted software developers
        </Typography>

        <Grid2
          container
          spacing={7}
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            p={4}

          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
            >
              One-on-One Live <br /> Mentorship
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Debug with the help of an expert" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Personalize your learning experience" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Get answers to complex Problems" />
              </ListItem>
            </List>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6b54",
                color: "white",
                py: 2,
                px: 4,
                mt: 3,
              }}
            >
              FIND A MENTOR
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <img
              src={img1}
              alt="Mentorship"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid2>

          <Grid2 item xs={12} md={6}    p={4}
          >
            <img
              src={img2}
              alt="Community Learning"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid2>
          <Grid2
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
            >
              Project-based freelance <br />
              Work
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <GroupIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Find experts for on-demand code review" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Build features for your existing product" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Turn your idea into an MVP" />
              </ListItem>
            </List>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6b54",
                color: "white",
                py: 2,
                px: 4,
                mt: 3,
              }}
            >
              FIND A FREELANCER
            </Button>
          </Grid2>

          <Grid2 item xs={12} md={6} sx={{ alignItems: "center" }}
          >
            <img
              src={join}
              alt="Freelance Work"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid2>
          <Grid2
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",

            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "24px" }}>
              arc()
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
            >
              Hiring for a bigger project?
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: 400, mb: 2, fontSize: "16px", color: "gray" }}
            >
              Arc helps find senior developers for both permentant <br />
              full-time roles and 40+ hour contract projects.
            </Typography>

            <Typography sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <a
                href=""
                style={{
                  color: "blue",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Visit arc to learn more 
              </a>
              <ArrowForwardIcon sx={{ color: "blue" }}/>
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
