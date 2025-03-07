import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black",  }}>


    <Container sx={{ maxWidth: 'xl', backgroundColor: 'black', color: 'white' }}>
      <Box sx={{ padding: 4 }}>
        <Grid2 container spacing={5}>
          <Grid2 xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              PRODUCTS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                <Link href="#" color="white" underline="hover" sx={{ color: 'white', fontSize: 18 }}>Codementor</Link> <br /> Find a mentor to help you in real time
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                <Link href="#" color="white" underline="hover" sx={{ color: 'white', fontSize: 18 }}>Codementor Events</Link> <br /> Attend and host virtual events for developers
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                <Link href="#" color="white" underline="hover" sx={{ color: 'white', fontSize: 18 }}>DevProjects</Link> <br /> Learn programming by building projects
              </Typography>
              <Typography variant="body1" sx={{ color: 'gray', fontSize: 12 }}>
                <Link href="#" color="white" underline="hover" sx={{ color: 'white', fontSize: 18 }}>Arc</Link> <br />Helping employers find talent for remote jobs
              </Typography>
            </Box>
          </Grid2>

          <Grid2 xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              PAGES
            </Typography>
            <Grid2 container spacing={20}>
              <Grid2 xs={6} sm={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" color="gray" underline="hover">Become a Codementor</Link>
                  <Link href="#" color="gray" underline="hover">How It Works</Link>
                  <Link href="#" color="gray" underline="hover">Find Mentors</Link>
                  <Link href="#" color="gray" underline="hover">Find Freelancers</Link>
                  <Link href="#" color="gray" underline="hover">Find a Tutor</Link>
                </Box>
              </Grid2>

              <Grid2 xs={6} sm={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" color="gray" underline="hover">Community</Link>
                  <Link href="#" color="gray" underline="hover">Blog</Link>
                  <Link href="#" color="gray" underline="hover">Codementor For Students</Link>
                  <Link href="#" color="gray" underline="hover">Codementor For Teams</Link>
                  <Link href="#" color="gray" underline="hover">Code Review</Link>
                </Box>
              </Grid2>

              <Grid2 xs={6} sm={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" color="gray" underline="hover">Pair Programming</Link>
                  <Link href="#" color="gray" underline="hover">Best Web Design Software</Link>
                  <Link href="#" color="gray" underline="hover">Coding Starter Kit</Link>
                  <Link href="#" color="gray" underline="hover">Codementor Reviews</Link>
                  <Link href="#" color="gray" underline="hover">Best Language to Learn</Link>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <hr style={{ color: 'gray', opacity: 0.3 }} />
        <Box sx={{ marginTop: 4 }}>
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Grid2>
              <Typography variant="body2" color="textSecondary" sx={{ color: 'gray', fontSize: 12 }}>
                © Copyright 2024 Codementor
              </Typography>
            </Grid2>

            <Grid2>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="gray" underline="hover" sx={{ fontSize: 12 }}>Cookie Policy</Link>
                <Link href="#" color="gray" underline="hover" sx={{ fontSize: 12 }}>Privacy Policy</Link>
                <Link href="#" color="gray" underline="hover" sx={{ fontSize: 12 }}>Terms of Service</Link>
                <Link href="#" color="gray" underline="hover" sx={{ fontSize: 12 }}>Careers</Link>
                <Link href="#" color="gray" underline="hover" sx={{ fontSize: 12 }}>Help Center</Link>
              </Box>
            </Grid2>

            <Grid2>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit">
                  <FacebookIcon sx={{ color: 'white', fontSize: 20 }} />
                </Link>
                <Link href="#" color="inherit">
                  <TwitterIcon sx={{ color: 'white', fontSize: 20 }} />
                </Link>
                <Link href="#" color="inherit">
                  <LinkedInIcon sx={{ color: 'white', fontSize: 20 }} />
                </Link>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
    </Box>

  );
};

export default Footer;