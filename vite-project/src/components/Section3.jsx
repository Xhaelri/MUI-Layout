import React from "react";
import { Container, Typography, Button, Card, CardContent, Avatar, Grid2 } from "@mui/material";
import { Box } from "@mui/system";
import { Star, Work, Code } from "@mui/icons-material";
const developers = [
  { name: "Jessamyn Smith", title: "Experienced Full Stack Web Developer", avatar: "https://via.placeholder.com/50" },
  { name: "Daniel Hamilton", title: "Senior Software Engineer @ Indeed", avatar: "https://via.placeholder.com/50" },
  { name: "Martijn Pieters", title: "#1 Stack Overflow Python Answerer", avatar: "https://via.placeholder.com/50" },
  { name: "Ionică Bizău", title: "Full Stack Developer", avatar: "https://via.placeholder.com/50" },
  { name: "Miroslav Kuťák", title: "Senior iOS Developer", avatar: "https://via.placeholder.com/50" },
  { name: "Ben Gottlieb", title: "Senior iOS Developer and Consultant", avatar: "https://via.placeholder.com/50" }
];

const DeveloperCard = ({ name, title, avatar }) => (
  <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 3 , width: 330,height: 90}}>
    <Avatar src={avatar} sx={{ width: 50, height: 50, mr: 2 }} />
    <CardContent>
      <Typography variant="h6" fontWeight="bold" sx={{textAlign: "left"}}>{name}</Typography>
      <Typography variant="body2" color="textSecondary" noWrap sx={{textAlign: "left"}}>{title}</Typography>
    <Box sx={{ display: "flex", gap: 1, mt: 1, color: "gray" }}>
        <Star />
        <Work />
        <Code />
      </Box>
    </CardContent>
  </Card>
);

const DeveloperGrid = () => {
  return (
    <Box sx={{ bgcolor: "#006080", py: 5, textAlign: "center" }}>

    <Container sx={{ textAlign: "center", py: 5, bgcolor: "#006080" }}>
      <Typography variant="h4" color="white" fontWeight="bold">Connect with</Typography>
      <Typography variant="h4" color="white" fontWeight="bold">12000+ top developers anytime</Typography>
      <Grid2 container spacing={1} justifyContent="center" mt={3}>
        {developers.map((dev, index) => (
          <Grid2 key={index} item xs={12} sm={6} md={4}>
            <DeveloperCard {...dev} />
          </Grid2>
        ))}
      </Grid2>
      <Typography variant="h6" color="white" mt={4}>Start working with our developers</Typography>
      <Button variant="contained"  sx={{ mt: 2, backgroundColor: "#ff6b54", color: "white", py: 2, px: 4 }}>Get Started</Button>
    </Container>
    </Box>
  );
};

export default DeveloperGrid;